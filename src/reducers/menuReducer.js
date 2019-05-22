import { CHANGE_MENU } from '../actions';

export default (state={}, action) => {
  switch (action.type) {
    case CHANGE_MENU:
      //console.log(action.payload, 'this is the currrent Payload')
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}