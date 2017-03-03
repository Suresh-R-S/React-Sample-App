import store from '../store';

export function editFlagClicked(value){
  return(dispatch)=>{
    dispatch(editFlagClickedFunction(value));
    if(store.getState().settingsData.get('editFlag')){
      dispatch(initialiseUserSettingsForm(store.getState().settingsData.get('data').toJS()));
    }
    else{
      dispatch(saveSettingsDataFunction(store.getState().userSettingsForm.get('data').toJS()));
    }
  }
}

export function initialiseUserSettingsForm(data){
  return(dispatch)=>{
    dispatch(initialiseUserSettingsFormFunction(data))
  }
}

export function changeFlag(flag){
  return(dispatch)=>{
    dispatch(changeFlagFunction(flag))
  }
}

export function addToArray(value,type){
  return(dispatch)=>{
    dispatch(addToArrayFunction(value,type));
  }
}

export function popFromArray(index,type){
  return(dispatch)=>{
    dispatch(popFromArrayFunction(index,type));
  }
}

function popFromArrayFunction(index,type){
  return{
    type : 'POP_FROM_'+type,
    payload : index
  }
}


function addToArrayFunction(value,type){
  return{
    type : 'PUSH_TO_'+type,
    payload : value
  }
}

function changeFlagFunction(flag){
  return{
    type : 'CHANGE_FLAG_'+flag
  }
}

function initialiseUserSettingsFormFunction(data){
  return{
    type : 'INITIALISE_USER_SETTINGS_FORM',
    payload : data
  }
}

function saveSettingsDataFunction(obj){
  return{
    type : 'SAVE_SETTINGS_DATA',
    payload : obj
  }
}

function editFlagClickedFunction(value){
  return{
    type : 'EDIT_FLAG_CLICKED',
    payload : value
  }
}
