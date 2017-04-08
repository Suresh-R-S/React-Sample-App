export default function(state={authenticated:false},action){
	switch(action.type){
		case 'LOGGED_IN_OUT' : {
			return {...state,authenticated:action.payload};
		}
		default : return state
	}
}
