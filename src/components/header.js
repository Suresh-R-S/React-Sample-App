import React from 'react';
import imageURL from '../constants/images';
import * as FontAwesome from 'react-icons/lib/fa';
import '../styles/common/header.css';
import {browserHistory} from 'react-router';

export default function Header(props){
  const settingsClicked = () => {
    browserHistory.push('settings');
  }

  const homeClicked = () => {
    browserHistory.push('home');
  }

  const logoutClicked = () => {
    browserHistory.push('/');
  }

  return(
    <div>
      <div className="header">
        <div className="header-col1">
          <img src={imageURL.logo} className="header-image" role="presentation" alt="go2student"/>
        </div>
        <div className="header-col2">
            {props.Path==='settings' ? <FontAwesome.FaHome size={35} color='#1179c0' onClick={homeClicked}/> : <FontAwesome.FaCog size={35} color='#1179c0' onClick={settingsClicked}/>}
            <FontAwesome.FaSignOut size={35} color='#1179c0' onClick={logoutClicked}/>
        </div>
      </div>
      <hr/>
    </div>
  )
}
