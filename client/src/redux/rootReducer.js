import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from '../utils/history';
import postReducer from './post/postReducer';
import userReducer from './user/userReducer';
import commentReducer from './comment/commentReducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['user'],
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});

export default persistReducer(persistConfig, rootReducer);
