import { takeLatest, put, all, call, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  fetchPostsApi,
  fetchIndividualPostApi,
  addPostApi,
} from '../../utils/api';
import userConstants from './postConstants';
import {
  fetchPostsListSuccessAction,
  fetchPostsListFailureAction,
  clearSuccessFailureAction,
  fetchIndividualPostSuccessAction,
  fetchIndividualPostFailureAction,
  addPostSuccessAction,
  addPostFailureAction,
} from './postActions';

// Saga worker function to fetch all posts
export function* fetchPostsList() {
  try {
    yield delay(2000);
    const res = yield call(fetchPostsApi);
    console.log('fetchPosts Saga res: ', res);
    if (res.status === 200 || res.statusText === 'OK') {
      yield put(fetchPostsListSuccessAction(res.data.posts));
      yield put(clearSuccessFailureAction());
    } else {
      yield put(fetchPostsListFailureAction());
      yield put(clearSuccessFailureAction());
    }
  } catch (error) {
    yield put(fetchPostsListFailureAction(error));
    yield put(clearSuccessFailureAction());
  }
}

// Saga worker function to fetch an individual post
export function* fetchIndividualPost({ payload }) {
  try {
    const id = payload;
    console.log('id: ', id);
    const res = yield call(fetchIndividualPostApi, id);
    console.log('fetchIndividualPost Saga res: ', res);
    if (res.status === 200 || res.statusText === 'OK') {
      yield put(fetchIndividualPostSuccessAction(res.data.post));
      yield put(clearSuccessFailureAction());
    } else {
      yield put(fetchIndividualPostFailureAction('Some error encountered!'));
      yield put(clearSuccessFailureAction());
    }
  } catch (error) {
    yield put(fetchIndividualPostFailureAction(error));
    yield put(clearSuccessFailureAction());
  }
}

// Saga worker function to create a  post
export function* addPost({ payload }) {
  try {
    const postToAdd = payload;
    console.log('postToAdd: ', postToAdd);
    const res = yield call(addPostApi, postToAdd);
    console.log('addPost Saga res: ', res);
    if (res.status === 200 || res.statusText === 'OK') {
      yield put(addPostSuccessAction(res.data.post));
      yield put(clearSuccessFailureAction());
    } else {
      yield put(addPostFailureAction('Some error encountered!'));
      yield put(clearSuccessFailureAction());
    }
  } catch (error) {
    yield put(addPostFailureAction(error));
    yield put(clearSuccessFailureAction());
  }
}

// watcher sagas listen for actions and trigger handler sagas

// Saga watcher function that listens for fetchPostsListStartAction action
export function* onFetchPostsListStart() {
  yield takeLatest(userConstants.FETCH_POSTS_LIST_START, fetchPostsList);
}

// Saga watcher function that listens for fetchIndividualPostStartAction action
export function* onfetchIndividualPostStart() {
  yield takeLatest(
    userConstants.FETCH_INDIVIDUAL_POST_START,
    fetchIndividualPost
  );
}

// Saga watcher function that listens for addPostStartAction action
export function* onAddPostStart() {
  yield takeLatest(userConstants.ADD_POST_START, addPost);
}

/**
 * all([...effects]) - parallel effects
 * Creates an Effect description that instructs the middleware to run multiple Effects in parallel.
 */
export function* postSagas() {
  yield all([
    call(onFetchPostsListStart),
    call(onfetchIndividualPostStart),
    call(onAddPostStart),
  ]);
}
