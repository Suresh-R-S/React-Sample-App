import React,{Component}from 'react';
import '../../styles/home.css';
import Header from '../header';
import SwipeCalendar from './swipeCalendar';
import HomeTabs from './homeTabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedTabFn from '../../actions/selectedTabAction';
import * as FontAwesome from 'react-icons/lib/fa';


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


class Home extends Component{

	constructor(props){
		super(props);
		this.state = {
			showCollapsibleSection  : false,
			filterIconSize : 35
		}
	}

	filterClicked = () => {
		this.setState({
			showCollapsibleSection : !this.state.showCollapsibleSection,
		});
		if(!this.state.showCollapsibleSection){
			this.setState({
				filterIconSize : 40
			});
		}
		else{
			this.setState({
				filterIconSize : 35
			});
		}
	}

	render(){
		let monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"];
		let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		let date = new Date();
		let dateToShow = date.getDate()+' '+monthNames[date.getMonth()]+' '+date.getFullYear()+', '+dayNames[date.getDay()];
		return(
	    <div>
	      <Header/>
				{this.state.showCollapsibleSection ? <div/> : <div className="date-div">{dateToShow}</div>}
				<div>
					<FontAwesome.FaFilter className="filter-icon" size={this.state.filterIconSize} color="#1179c0" onClick={this.filterClicked}/>
				</div>
				{this.state.showCollapsibleSection ? <div className="filter-container">
					<div className="search-bar-container">
						<input className="search-bar" type="text" placeholder="search here..."/>
					</div>
					<SwipeCalendar Data={this.props.calendarData}/>
				</div> : <div/>}
				<div>
	        <HomeTabs SelectedTabFn={this.props.selectedTabFn} EventList={this.props.eventList}/>
	      </div>
	    </div>
	  )
	}
}

export default connect(moveStateToProps,matchDispatchToProps)(Home);
