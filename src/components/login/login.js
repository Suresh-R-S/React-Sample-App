import React,{Component} from 'react';
import LoginForm from '../forms/loginForm';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMasterData from '../../actions/masterDataAction';
import {calculateDateForSwipeCalendar} from '../../actions/swipeCalendarAction';


function moveStateToProps(state){
	return {
		masterData : state.masterData,
	};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
		getMasterData : getMasterData,
		calculateDateForSwipeCalendar : calculateDateForSwipeCalendar
	},dispatch);
}

class Login extends Component{

  componentDidMount(){
    //this.props.getMasterData();
		this.props.calculateDateForSwipeCalendar();
  }

  loginClicked(values){
    browserHistory.push('home');
  }
  render(){
    return(
      <div>
        <LoginForm LoginClicked={this.loginClicked} MasterData={this.props.masterData.get('data')}/>
      </div>
    )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(Login);
