import postConstants from './postConstants';

const INITIAL_STATE = {
  posts: [],
  individualPost: null,
  isLoading: false,
  isSuccess: false,
  failureMessgae: '',
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postConstants.FETCH_POSTS_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case postConstants.FETCH_POSTS_LIST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case postConstants.FETCH_POSTS_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        failureMessage: action.payload,
      };
    case postConstants.CLEAR_SUCCESS_FAILURE:
      return {
        ...state,
        isSuccess: false,
        failureMessage: '',
      };
    case postConstants.FETCH_INDIVIDUAL_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case postConstants.FETCH_INDIVIDUAL_POST_SUCCESS:
      return {
        ...state,
        individualPost: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case postConstants.FETCH_INDIVIDUAL_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        failureMessage: action.payload,
      };
    case postConstants.ADD_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case postConstants.ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isLoading: false,
        isSuccess: true,
      };
    case postConstants.ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        failureMessage: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
