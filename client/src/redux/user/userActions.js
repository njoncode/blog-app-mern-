import userConstants from './userConstants';

export const signUpStartAction = (userCredentials) => ({
  type: userConstants.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccessAction = (payload) => ({
  type: userConstants.SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailureAction = (error) => ({
  type: userConstants.SIGN_UP_FAILURE,
  payload: error,
});

export const signInStartAction = (emailAndPassword) => ({
  type: userConstants.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccessAction = (user) => ({
  type: userConstants.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailureAction = (error) => ({
  type: userConstants.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStartAction = () => ({
  type: userConstants.SIGN_OUT_START,
});

export const signOutSuccessAction = () => ({
  type: userConstants.SIGN_OUT_SUCCESS,
});

export const signOutFailureAction = (error) => ({
  type: userConstants.SIGN_OUT_FAILURE,
  payload: error,
});

export const clearSuccessFailureAction = () => ({
  type: userConstants.CLEAR_SUCCESS_FAILURE,
});
