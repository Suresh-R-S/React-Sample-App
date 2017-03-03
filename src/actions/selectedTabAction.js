export default function selectedTab(eventType){
  return(dispatch)=>{
    dispatch(selectedTabFunction(eventType));
  }
}

function selectedTabFunction(eventType){
  return{
    type : 'SELECTED_TAB',
    payload : eventType
  }
}
