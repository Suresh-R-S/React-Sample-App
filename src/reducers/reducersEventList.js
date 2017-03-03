import {fromJS} from 'immutable';

const initialState = fromJS({data : [
  {id:3,type:'C',subject:'ReactJS workshop',date:'1/3/2017 10:00AM',location:'Seminar Hall',time:'10.00AM to 12.00PM',instructor:'Suresh.R.S',fav:true,details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id:1,type:'A',subject:'Active Shooter in the campus',fav:true,details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id:2,type:'E',subject:'CS Model Exam 2017',date:'1/3/2017 10:00AM',location:'Exam Hall,Block A',time:'10.00AM to 12.00PM',fav:false,details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id:4,type:'G',subject:'Annual Day Celebrations',date:'1/3/2017 10:00AM',time:'10.00AM to 12.00PM',location:'Auditorium',fav:false,details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
],fetching : false});

export default function(state=initialState,action){
	switch(action.type){
    case 'FAV_ICON_CLICKED' :
                                return state.setIn(['data',
                                state.get('data').findIndex(item => {
                                  return item.get('id') === action.payload.Id
                                }),'fav'],action.payload.Value);
    default : return state
	}
}
