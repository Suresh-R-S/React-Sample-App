export function loggedIn(value){
  return (dispatch) => {
    dispatch(loggedInFunction(value));
  }
}

function loggedInFunction(value){
  return {
    type : 'LOGGED_IN_OUT',
    payload : value
  }
}
