import { takeLatest, put, all, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { addCommentApi, fetchCommentsApi } from '../../utils/api';
import commentConstants from './commentConstants';
import {
  addCommentSuccessAction,
  addCommentFailureAction,
  clearSuccessFailureAction,
  fetchCommentsSuccessAction,
  fetchCommentsFailureAction,
} from './commentActions';

// Saga worker function to post comment
export function* addComment({ payload }) {
  try {
    console.log('addComment Saga payload: ', payload);
    const { text, postId } = payload;
    const commentBody = { text };
    console.log('commentBody: ', commentBody);
    const res = yield call(addCommentApi, commentBody, postId);
    console.log('addComment Saga res: ', res);
    if (res.status === 200 || res.statusText === 'OK') {
      yield put(addCommentSuccessAction(res.data.comment.text));
      yield put(clearSuccessFailureAction());
    } else {
      yield put(addCommentFailureAction('Some error encountered!'));
      yield put(clearSuccessFailureAction());
    }
  } catch (error) {
    yield put(addCommentFailureAction(error));
    yield put(clearSuccessFailureAction());
  }
}

// Saga worker function to fetch all comments posted by the users
export function* fetchComments({ payload }) {
  try {
    console.log('fetchComments Saga payload: ', payload);
    const postId = payload;
    const res = yield call(fetchCommentsApi, postId);
    console.log('fetchComments Saga res: ', res);
    if (res.status === 200 || res.statusText === 'OK') {
      yield put(fetchCommentsSuccessAction(res.data.comments));
      yield put(clearSuccessFailureAction());
    } else {
      yield put(fetchCommentsFailureAction('Some error encountered!'));
      yield put(clearSuccessFailureAction());
    }
  } catch (error) {
    yield put(fetchCommentsFailureAction(error));
    yield put(clearSuccessFailureAction());
  }
}

// Saga watcher function that listens for addCommentStartAction action
export function* onAddCommentStart() {
  yield takeLatest(commentConstants.ADD_COMMENT_START, addComment);
}

// Saga watcher function that listens for fetchCommentsStartAction action
export function* onFetchCommentsStart() {
  yield takeLatest(commentConstants.FETCH_COMMENTS_START, fetchComments);
}

export function* commentSagas() {
  yield all([call(onAddCommentStart), call(onFetchCommentsStart)]);
}
