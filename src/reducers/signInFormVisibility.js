import { SIGN_IN_FORM_VISIBLE, SIGN_IN_FORM_NOT_VISIBLE } from '../actions';

export default (state={
  zIndex: '-1',
  opacity: '0'
}, action) => {
  switch (action.type) {
    case SIGN_IN_FORM_VISIBLE:
      //console.log(action.payload, 'this is the currrent Payload')
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}