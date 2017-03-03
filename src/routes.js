import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Login from './components/login/login';
import Home from './components/home/home';
import EventDetails from './components/home/details/eventDetails';
import Settings from './components/settings/settings';
import NoMatch from './components/noMatch';

export default function Routes(props){
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Login}/>
      <Route path='home' component={Home}/>
      <Route path='eventDetails' component={EventDetails}/>
      <Route path='settings' component={Settings}/>
      <Route path='*' component={NoMatch}/>
    </Router>
  )
}
