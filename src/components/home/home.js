import React from 'react';
import '../../styles/home.css';
import Header from '../header';
import HomeTabs from './homeTabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedTabFn from '../../actions/selectedTabAction';

function moveStateToProps(state){
	return {
		masterData : state.masterData,
    selectedTab : state.selectedTab,
		eventList : state.eventList
	};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
		selectedTabFn : selectedTabFn
	},dispatch);
}


function Home(props){
	return(
    <div>
      <Header/>
      <div>
        <HomeTabs SelectedTabFn={props.selectedTabFn} EventList={props.eventList}/>
      </div>
    </div>
  )
}

export default connect(moveStateToProps,matchDispatchToProps)(Home);
