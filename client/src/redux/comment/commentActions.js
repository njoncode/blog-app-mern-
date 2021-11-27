import commentConstants from './commentConstants';

export const addCommentStartAction = (payload) => ({
  type: commentConstants.ADD_COMMENT_START,
  payload,
});

export const addCommentSuccessAction = (payload) => ({
  type: commentConstants.ADD_COMMENT_SUCCESS,
  payload,
});

export const addCommentFailureAction = (error) => ({
  type: commentConstants.ADD_COMMENT_FAILURE,
  payload: error,
});

export const fetchCommentsStartAction = (payload) => ({
  type: commentConstants.FETCH_COMMENTS_START,
  payload,
});

export const fetchCommentsSuccessAction = (payload) => ({
  type: commentConstants.FETCH_COMMENTS_SUCCESS,
  payload,
});

export const fetchCommentsFailureAction = (error) => ({
  type: commentConstants.FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const clearSuccessFailureAction = () => ({
  type: commentConstants.CLEAR_SUCCESS_FAILURE,
});
