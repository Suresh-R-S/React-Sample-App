import { fromJS } from 'immutable';

const initialState = fromJS({data:{},fetching:false});

export default function(state=initialState,action){
	switch(action.type){
		case 'SWIPE_CALENDAR_DATES' : {
			return state.set('data',action.payload);
		}
		default : return state
	}
}
