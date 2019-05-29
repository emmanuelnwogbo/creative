import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import userAcccountReducer from './userAcccountReducer';
import signInFormVisibility from './signInFormVisibility'

export default combineReducers({
  menuReducer,
  userAccountStat: userAcccountReducer,
  signInFormVisible: signInFormVisibility
});