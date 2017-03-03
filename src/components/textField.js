import React from 'react';
import '../styles/common/textField.css';

export default function TextField(props){
  const {input} = props;
  return(
    <input type={props.Type} placeholder={props.PlaceHolder} {...input} className="text-field"/>
  )
}
