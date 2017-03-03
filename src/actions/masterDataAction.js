import { getCall } from '../utils/apis';

function getMasterData(){
  return async (dispatch) => {
    await dispatch(apiCallStart());
    await getCall('get_master_data')
    .then(async (response) =>
      {
        if(response.data.code === 200 && response.data.status === 1){
          await dispatch(apiCallSuccess(response.data.data));
        }
        else{
          await dispatch(apiCallFailure());
        }
      }
    )
    .catch(async(error) => {
      await dispatch(apiCallError(error))
    });
  }
}

function apiCallStart(){
  return {
    type : "MASTER_DATA_API_CALL_START"
  }
}

function apiCallSuccess(data){
  return {
    type : "MASTER_DATA_API_CALL_SUCCESS",
    payload : data
  }
}

function apiCallFailure(){
  return {
    type : "MASTER_DATA_API_CALL_FAILURE"
  }
}

function apiCallError(error){
  return {
    type : "MASTER_DATA_API_CALL_ERROR",
    payload : error
  }
}

export default getMasterData;
