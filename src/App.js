import React, { Component } from 'react';
import { Route} from 'react-router';
import logo from '../src/assets/logo.png';
import {NavLink} from  "react-router-dom";
import RegisterForm from './Register/RegisterForm';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='col-md-12 '>
      <div className="content">
          <Route path="/" component={Home}/>
          <Route path="/RegisterForm" component={RegisterForm}/>
        </div>
        <ul className="header">
          <h3><NavLink exact to="/">Home</NavLink></h3>
          <h3><NavLink exact to="/RegisterForm">RegisterForm</NavLink></h3>
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
