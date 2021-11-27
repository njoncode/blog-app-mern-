import commentConstants from './commentConstants';

const INITIAL_STATE = {
  comments: [],
  isCommentPostingLoading: false,
  isCommentPostingSuccess: false,
  commentPostingfailureMessgae: '',
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commentConstants.ADD_COMMENT_START:
      return {
        ...state,
        isCommentPostingLoading: true,
      };
    case commentConstants.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        isCommentPostingLoading: false,
        isCommentPostingSuccess: true,
      };
    case commentConstants.ADD_COMMENT_FAILURE:
    case commentConstants.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isCommentPostingLoading: false,
        commentPostingfailureMessgae: action.payload,
      };
    case commentConstants.FETCH_COMMENTS_START:
      return {
        ...state,
        isCommentPostingLoading: true,
      };
    case commentConstants.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isCommentPostingLoading: true,
      };

    default:
      return state;
  }
};

export default commentReducer;
