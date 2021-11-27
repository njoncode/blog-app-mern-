import { all, call } from 'redux-saga/effects';

import { postSagas } from './post/postSagas';
import { userSagas } from './user/userSagas';
import { commentSagas } from './comment/commentSagas';

export default function* rootSaga() {
  yield all([call(postSagas), call(userSagas), call(commentSagas)]);
}
