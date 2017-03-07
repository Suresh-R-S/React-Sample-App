import {fromJS} from 'immutable';

const initialState = fromJS({data : [{id:1,name:'Harvard'},{id:2,name:'Stanford'},{id:3,name:'Texas A&M'},{id:4,name:'Clemson'}],fetching : false});

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
