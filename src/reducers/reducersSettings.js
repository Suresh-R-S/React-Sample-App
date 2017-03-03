import {fromJS} from 'immutable';

const initialState = fromJS({data : {
  username : 'Suresh.R.S',
  primaryEmail : 'suresh.rs@experionglobal.com',
  emailData : ['rssuresh2@gmail.com'],
  phoneData : ['9633450032'],
  daily : true,
  previous : true,
  onehour : true,
  between : true,
  push : true,
  email : true,
  phone : true
},editFlag: false,fetching : false});

export default function(state=initialState,action){
	switch(action.type){
    case 'SAVE_SETTINGS_DATA' : return state.set('data',fromJS(action.payload));
    case 'EDIT_FLAG_CLICKED' : return state.set('editFlag',action.payload);
		default : return state
	}
}
