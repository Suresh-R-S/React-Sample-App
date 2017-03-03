import React from 'react';
import '../../styles/settings.css'
import * as FontAwesome from 'react-icons/lib/fa';
import EmailPhoneArray from '../emailPhoneArray';

export default function SettingsData(props){

  const fieldValueChanged = (val) => {
    props.ChangeFlag(val);
  }

  return(
    <div>
    <div className="image-container">
      <div><FontAwesome.FaUser size={70}/></div>
      <div className="user-name">{props.Data.get('username')}</div>
    </div>
    <div className="broadcast-portion">
      <fieldset className="settings-checkbox-group broadcast-settings">
        <legend className="settings-header">Broadcast Settings</legend>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastSettings" value="daily" checked={props.Data.get('daily')} onChange={() => fieldValueChanged('DAILY')} disabled={!props.EditFlag}/>Daily
        </div>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastSettings" value="previuos" checked={props.Data.get('previous')} onChange={() => fieldValueChanged('PREVIOUS')} disabled={!props.EditFlag}/>Previous Day Before<br />
        </div>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastSettings" value="oneHour" checked={props.Data.get('onehour')} onChange={() => fieldValueChanged('ONE_HOUR')} disabled={!props.EditFlag}/>One hour before<br />
        </div>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastSettings" value="between" checked={props.Data.get('between')} onChange={() => fieldValueChanged('BETWEEN')} disabled={!props.EditFlag}/>Between 6AM and 8PM<br />
        </div>
      </fieldset>
      <fieldset className="settings-checkbox-group broadcast-preferences">
        <legend className="settings-header">Broadcast Preferences</legend>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastPreferences" value="push" checked={props.Data.get('push')} onChange={() => fieldValueChanged('PUSH')} disabled={!props.EditFlag}/>Push Notification<br />
        </div>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastPreferences" value="email" checked={props.Data.get('email')} onChange={() => fieldValueChanged('EMAIL')} disabled={!props.EditFlag}/>Email<br />
        </div>
        <div className="settings-checkbox-item">
          <input type="checkbox" name="broadcastPreferences" value="phone" checked={props.Data.get('phone')} onChange={() => fieldValueChanged('PHONE')} disabled={!props.EditFlag}/>Phone<br />
        </div>
      </fieldset>
    </div>
    <div className="broadcast-portion">
    { props.Data.get('email') ?
      <EmailPhoneArray Type="EMAIL" PrimaryEmail={props.Data.get('primaryEmail')} Data={props.Data.get('emailData')} EditFlag={props.EditFlag} AddToArray={props.AddToArray} PopFromArray={props.PopFromArray}/>
      : <div/>
    }
    { props.Data.get('phone') ?
      <EmailPhoneArray Type="PHONE" PrimaryEmail={props.Data.get('primaryEmail')} Data={props.Data.get('phoneData')} EditFlag={props.EditFlag} AddToArray={props.AddToArray} PopFromArray={props.PopFromArray}/>
      : <div/>
    }
    </div>
    </div>
  )
}
