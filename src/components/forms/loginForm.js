import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '../textField';
import OrganizationNames from '../organizationNames';
import '../../styles/login.css';
import imageURL from '../../constants/images';

function LoginForm(props){
  const {handleSubmit} = props;

  return(
    <div className="login-form">
      <img src={imageURL.logo} className="login-image" role="presentation" alt="go2student"/>
      <form onSubmit={handleSubmit(props.LoginClicked)}>
        <div className="login-field">
          <Field name="organization" component={OrganizationNames} MasterData={props.MasterData}/>
        </div>
        <div className="login-field">
          <Field name="username" component={TextField} Type="text" PlaceHolder="Enter your username"/>
        </div>
        <div className="login-field">
          <Field name="password" component={TextField} Type="password" PlaceHolder="Enter your password"/>
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  )
}

const LoginFormConfig = {
  form: 'loginForm'
};

export default reduxForm(LoginFormConfig)(LoginForm);
