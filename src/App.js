import React, { Component } from 'react';
import Timer from './Timer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Timer App</h1>
        </header>
        <Timer />
      </div>
    );
  }
}

export default App;
