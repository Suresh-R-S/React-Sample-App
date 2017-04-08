import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


export default function (ComposedComponent){

  function moveStateToProps(state){
      return {
        authentication : state.authentication
      }
  }

  class Authentication extends Component{
    componentDidMount(){
      if(!this.props.authentication.authenticated){
        console.log("ooopssss plsss try again... session expired");
        browserHistory.push('/');
      }
    }

    render(){
      return(
        <ComposedComponent {...this.props}/>
      )
    }
  }
  return connect(moveStateToProps)(Authentication);
}
