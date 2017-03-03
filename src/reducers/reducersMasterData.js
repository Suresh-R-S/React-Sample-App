import {fromJS} from 'immutable';

const initialState = fromJS({data : {},fetching : false});

export default function(state=initialState,action){
	switch(action.type){
		case 'MASTER_DATA_API_CALL_START' : {
			return state.set('fetching',true);
		}
		case 'MASTER_DATA_API_CALL_SUCCESS' : {
			return state.set('data',action.payload).set('fetching',false);
		}
		case 'MASTER_DATA_API_CALL_FAILURE' : {
			return state.set('fetching',false);
		}
		case 'MASTER_DATA_API_CALL_ERROR' : {
			return state.set('fetching',false);
		}
		default : return state
	}
}
