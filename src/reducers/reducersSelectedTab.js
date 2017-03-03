import { Map } from 'immutable';

const initialState = Map({selectedTab : 'All'});

export default function(state=initialState,action){
	switch(action.type){
		case 'SELECTED_TAB' : {
			return state.set('selectedTab',action.payload);
		}
		default : return state
	}
}
