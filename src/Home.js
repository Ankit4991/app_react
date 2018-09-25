import React, { Component } from 'react';
import logo from '../src/assets/logo.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <img src={logo} className={logo} />
        <div className="Home-header">
          <h1 className="Home-title">SBI DashBoard</h1>
        </div>
      </div>
    );
  }
}

export default Home;