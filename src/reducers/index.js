import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import userAcccountReducer from './userAcccountReducer';
import signInFormVisibility from './signInFormVisibility'

export default combineReducers({
  menu: menuReducer,
  userAccountStat: userAcccountReducer,
  signInFormVisible: signInFormVisibility
});