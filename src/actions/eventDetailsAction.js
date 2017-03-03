export default function favIconClicked(id,value){
  return(dispatch) => {
    dispatch(favIconClickedFunction(id,value));
  }
}

function favIconClickedFunction(id,value){
  let objToSend = {Id : id,Value : value};
  return{
    type : 'FAV_ICON_CLICKED',
    payload : objToSend
  }
}
