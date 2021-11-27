import postConstants from './postConstants';

export const fetchPostsListStartAction = () => ({
  type: postConstants.FETCH_POSTS_LIST_START,
});

export const fetchPostsListSuccessAction = (payload) => ({
  type: postConstants.FETCH_POSTS_LIST_SUCCESS,
  payload,
});

export const fetchPostsListFailureAction = (error) => ({
  type: postConstants.FETCH_POSTS_LIST_FAILURE,
  payload: error,
});

export const clearSuccessFailureAction = () => ({
  type: postConstants.CLEAR_SUCCESS_FAILURE,
});

export const fetchIndividualPostStartAction = (id) => ({
  type: postConstants.FETCH_INDIVIDUAL_POST_START,
  payload: id,
});

export const fetchIndividualPostSuccessAction = (payload) => ({
  type: postConstants.FETCH_INDIVIDUAL_POST_SUCCESS,
  payload,
});

export const fetchIndividualPostFailureAction = (error) => ({
  type: postConstants.FETCH_INDIVIDUAL_POST_FAILURE,
  payload: error,
});

export const addPostStartAction = (postToBeAdded) => ({
  type: postConstants.ADD_POST_START,
  payload: postToBeAdded,
});

export const addPostSuccessAction = (payload) => ({
  type: postConstants.ADD_POST_SUCCESS,
  payload,
});

export const addPostFailureAction = (error) => ({
  type: postConstants.ADD_POST_FAILURE,
  payload: error,
});
