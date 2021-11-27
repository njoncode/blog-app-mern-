import userConstants from './userConstants';

const INTITIAL_STATE = {
  isProfileDropdownHidden: false,
  usersData: [],
  currentUser: null,
  error: null,
  isLoading: false,
  isSuccess: false,
  failureMessage: '',
};

const userReducer = (state = INTITIAL_STATE, action) => {
  console.log('userReducer state: ', state);
  switch (action.type) {
    case userConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        usersData: [...state.usersData, action.payload],
        error: null,
        isLoading: false,
        isSuccess: true,
      };
    case userConstants.SIGN_UP_FAILURE:
    case userConstants.SIGN_IN_FAILURE:
    case userConstants.SIGN_OUT_FAILURE:
    case userConstants.EDIT_USER_FAILURE:
    case userConstants.EDIT_USER_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        failureMessage: action.payload,
      };
    case userConstants.SIGN_IN_START:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case userConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isLoading: false,
        isSuccess: true,
      };
    case userConstants.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isLoading: false,
        isSuccess: true,
      };
    case userConstants.CLEAR_SUCCESS_FAILURE:
      return {
        ...state,
        isSuccess: false,
        failureMessage: '',
      };

    default:
      return state;
  }
};

export default userReducer;
