import { USER_ACCOUNT_STATUS } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case USER_ACCOUNT_STATUS:
      //console.log(action.payload, 'this is the currrent Payload')
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}