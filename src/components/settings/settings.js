import React from 'react';
import Header from '../header';
import SettingsData from './settingsData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {editFlagClicked,changeFlag,addToArray,popFromArray} from '../../actions/settingsAction';
import * as FontAwesome from 'react-icons/lib/fa';
import '../../styles/settings.css';

function moveStateToProps(state){
	return {
		settingsData : state.settingsData.get('data'),
    editFlag : state.settingsData.get('editFlag'),
    userSettingsForm : state.userSettingsForm.get('data')
	};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
		editFlagClicked : editFlagClicked,
    changeFlag : changeFlag,
    addToArray : addToArray,
		popFromArray : popFromArray
	},dispatch);
}

function Settings(props){
  const toggleEditFlagFunction = () => {
    let currentFlag = props.editFlag;
    props.editFlagClicked(!currentFlag);
  }

  const editButtonFunction = () => {
    if(props.editFlag){
			return <FontAwesome.FaFloppyO className="edit-button" size={35} color='#1179c0' onClick={toggleEditFlagFunction}/>
    }
    else{
      return <FontAwesome.FaPencilSquare className="edit-button" size={35} color='#1179c0' onClick={toggleEditFlagFunction}/>
    }
  }

  return(
    <div>
      <Header Path='settings'/>
      <div className="edit-button-container">{editButtonFunction()}</div>
      <SettingsData Data={props.editFlag ? props.userSettingsForm : props.settingsData} EditFlag={props.editFlag} ChangeFlag={props.changeFlag} AddToArray={props.addToArray} PopFromArray={props.popFromArray}/>
    </div>
  )
}

export default connect(moveStateToProps,matchDispatchToProps)(Settings);
