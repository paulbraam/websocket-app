import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { logsReducer } from './logs.reducer';

export default combineReducers({
  user: userReducer,
  logs: logsReducer
});
