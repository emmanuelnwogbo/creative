export const CHANGE_MENU = 'change_menu';
export const USER_ACCOUNT_STATUS = 'user_account_status';
export const SIGN_IN_FORM_VISIBLE = 'sign_in_form_visible';
//export const SIGN_IN_FORM_NOT_VISIBLE = 'sign_in_form_not_visible';

export const changeMenu = (label) => dispatch => {
  //console.log(e);

  dispatch({
    type: CHANGE_MENU,
    payload: label
  })
}

export const userAccountStatus = (status) => dispatch => {
  dispatch({
    type: USER_ACCOUNT_STATUS,
    payload: status
  })
}

export const btnClickHandler = (userAccountStat, signUp=true) => dispatch => {
  if (userAccountStat === null && signUp) {
    dispatch({
      type: SIGN_IN_FORM_VISIBLE,
      payload: {
        zIndex: '2000',
        opacity: '1'
      }
    })
    return
  }

  if (userAccountStat === null && !signUp) {
    dispatch({
      type: SIGN_IN_FORM_VISIBLE,
      payload: {
        zIndex: '-1',
        opacity: '0'
      }
    })
    return
  }
}