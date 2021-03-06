import React,{Component} from 'react';
import imageURL from '../constants/images';
import * as FontAwesome from 'react-icons/lib/fa';
import '../styles/common/header.css';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loggedIn} from '../actions/authenticationAction';


function moveStateToProps(state){
	return {
    settingsData : state.settingsData.get('data')
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		loggedIn : loggedIn
	},dispatch);

}

class Header extends Component{

  constructor(props){
    super(props);
    this.state={
      settingsButtonSize : 35,
      logoutButtonSize : 35
    }
  }

  settingsClicked = () => {
    browserHistory.push('settings');
  }

  homeClicked = () => {
    browserHistory.push('home');
  }

  logoutClicked = () => {
		this.props.loggedIn(false);
    browserHistory.push('/');
  }

  render(){
  return(
    <div>
      <div className="header">
        <div className="header-col1">
          <img src={imageURL.logo} className="header-image" role="presentation" alt="go2student"/>
        </div>
        <div className="header-col2">
            {this.props.Path==='settings'? <div/> : <img role="presentation" className="profile-pic-container" src={this.props.settingsData.get('profilePic') ? this.props.settingsData.get('profilePic') : imageURL.profilePic}/>}
            <div className="rest-container">
              {this.props.Path==='settings' ? <FontAwesome.FaHome size={this.state.settingsButtonSize} color='#1179c0' onClick={this.homeClicked} onMouseEnter={()=>this.setState({settingsButtonSize:40})} onMouseLeave={()=>this.setState({settingsButtonSize:35})}/> : <FontAwesome.FaCog size={this.state.settingsButtonSize} color='#1179c0' onClick={this.settingsClicked} onMouseEnter={()=>this.setState({settingsButtonSize:40})} onMouseLeave={()=>this.setState({settingsButtonSize:35})}/>}
              <FontAwesome.FaSignOut size={this.state.logoutButtonSize} color='#1179c0' onClick={this.logoutClicked} onMouseEnter={()=>this.setState({logoutButtonSize:40})} onMouseLeave={()=>this.setState({logoutButtonSize:35})}/>
            </div>
        </div>
      </div>
      <hr/>
    </div>
  )
  }
}

export default connect(moveStateToProps,matchDispatchToProps)(Header);
