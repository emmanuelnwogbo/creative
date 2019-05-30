import { CHANGE_MENU } from '../actions';

const initialMenuName = {
  label: 'Projects'
}

export default (state=initialMenuName, action={}) => {
  switch (action.type) {
    case CHANGE_MENU:
      //console.log(action.payload, 'this is the currrent Payload')
      //console.log(action.payload)
      return Object.assign({}, state, {
        label: action.payload
      });
      break;
    default:
      return state;
      break;
  }
}