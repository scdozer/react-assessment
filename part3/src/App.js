import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/home/home';
import router from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>{ router }</div>
    );
  }
}

export default App;
