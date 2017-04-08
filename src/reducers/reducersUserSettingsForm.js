import {fromJS} from 'immutable';

const initialState = fromJS({data : {},fetching : false});

export default function(state=initialState,action){
	switch(action.type){
    case 'INITIALISE_USER_SETTINGS_FORM' : return state.set('data',fromJS(action.payload));
    case 'CHANGE_FLAG_DAILY' : return state.setIn(['data','daily'],!state.getIn(['data','daily']))
    case 'CHANGE_FLAG_PREVIOUS' : return state.setIn(['data','previous'],!state.getIn(['data','previous']))
    case 'CHANGE_FLAG_ONE_HOUR' : return state.setIn(['data','onehour'],!state.getIn(['data','onehour']))
    case 'CHANGE_FLAG_BETWEEN' : return state.setIn(['data','between'],!state.getIn(['data','between']))
    case 'CHANGE_FLAG_PUSH' : return state.setIn(['data','push'],!state.getIn(['data','push']))
    case 'CHANGE_FLAG_EMAIL' : return state.setIn(['data','email'],!state.getIn(['data','email']))
    case 'CHANGE_FLAG_PHONE' : return state.setIn(['data','phone'],!state.getIn(['data','phone']))
    case 'PUSH_TO_EMAIL' : return state.setIn(['data','emailData'],state.getIn(['data','emailData']).push(action.payload))
		case 'POP_FROM_EMAIL' : return state.setIn(['data','emailData'],state.getIn(['data','emailData']).filter((item,index) => {return index !== action.payload}))
		case 'PUSH_TO_PHONE' : return state.setIn(['data','phoneData'],state.getIn(['data','phoneData']).push(action.payload))
		case 'POP_FROM_PHONE' : return state.setIn(['data','phoneData'],state.getIn(['data','phoneData']).filter((item,index) => {return index !== action.payload}))
		case 'IMAGE_UPLOADED' : return state.setIn(['data','profilePic'],action.payload)
		default : return state
	}
}
