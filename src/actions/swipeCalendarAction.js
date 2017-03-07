import {List} from 'immutable';

export function calculateDateForSwipeCalendar(){
  return(dispatch) => {
    let dateArray = calculateDateForSwipeCalendarFunction();
    dispatch(swipeCalendarFunction(dateArray));
  }
}

function calculateDateForSwipeCalendarFunction(){
  var dateArrayHere = List([]);
  let currentDate = new Date();
	let currentDate1 = new Date();
	let initialFlag = 0;
	let tempDate = currentDate.setDate(currentDate.getDate()+59);
	const maximumDate = new Date(tempDate);
	while(currentDate1<=maximumDate){
		if(!initialFlag){
				dateArrayHere = dateArrayHere.push({date : new Date(currentDate1),selected : true,id: new Date(currentDate1).getTime()})
    }
		else{
				dateArrayHere = dateArrayHere.push({date : new Date(currentDate1),selected : false,id: new Date(currentDate1).getTime()})
    }
		initialFlag = 1;
		currentDate1.setDate(currentDate1.getDate()+1);
  }
	return dateArrayHere;
}

function swipeCalendarFunction(objToSend){
  return {
    type : 'SWIPE_CALENDAR_DATES',
    payload : objToSend
  }
}
