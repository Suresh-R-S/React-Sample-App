import React,{Component} from 'react';
import LoginForm from '../forms/loginForm';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMasterData from '../../actions/masterDataAction';
import {calculateDateForSwipeCalendar} from '../../actions/swipeCalendarAction';
import {loggedIn} from '../../actions/authenticationAction';

function moveStateToProps(state){
	return {
		masterData : state.masterData,
	};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
		getMasterData : getMasterData,
		calculateDateForSwipeCalendar : calculateDateForSwipeCalendar,
		loggedIn : loggedIn
	},dispatch);
}

class Login extends Component{

  componentDidMount(){
    //this.props.getMasterData();
		this.props.calculateDateForSwipeCalendar();
  }

  loginClicked(values){
		this.props.loggedIn(true);
    browserHistory.push('home');
  }

  render(){
    return(
      <div>
        <LoginForm LoginClicked={this.loginClicked.bind(this)} MasterData={this.props.masterData.get('data')}/>
      </div>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(Login);
