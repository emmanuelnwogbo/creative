export const CHANGE_MENU = 'change_menu';
export const changeMenu = (label) => (dispatch) => {
  //console.log(e);

  dispatch({
    type: CHANGE_MENU,
    payload: label
  })
}