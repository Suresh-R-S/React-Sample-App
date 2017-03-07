import React from 'react';
import '../../styles/home.css';
import Header from '../header';
import SwipeCalendar from './swipeCalendar';
import HomeTabs from './homeTabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedTabFn from '../../actions/selectedTabAction';

function moveStateToProps(state){
	return {
    selectedTab : state.selectedTab,
		eventList : state.eventList,
		calendarData  : state.calendarData
	};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
		selectedTabFn : selectedTabFn
	},dispatch);
}


function Home(props){
	let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
	let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	let date = new Date();
	let dateToShow = date.getDate()+' '+monthNames[date.getMonth()]+' '+date.getFullYear()+', '+dayNames[date.getDay()];
	return(
    <div>
      <Header/>
			<div className="date-div">{dateToShow}</div>
			<div className="filter-container">
				<SwipeCalendar Data={props.calendarData}/>
				<div className="search-bar-container">
					<input className="search-bar" type="text" placeholder="search here..."/>
				</div>
			</div>
			<div>
        <HomeTabs SelectedTabFn={props.selectedTabFn} EventList={props.eventList}/>
      </div>
    </div>
  )
}

export default connect(moveStateToProps,matchDispatchToProps)(Home);
