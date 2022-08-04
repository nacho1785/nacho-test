import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import React, { Component } from 'react';
import Forecast from "./components/Forecast/Forecast";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src= {logo} className= "App-logo" alt= "logo" />
          <header><h2>Welcome to Nacho's App</h2></header>
          <main>  
            <Forecast />
          </main>
          <footer><h5>Brought to you by Nacho</h5></footer>
        </div>
          <p className= "App-intro">
            Hi {this.props.name}!
          </p>
          <Clock ></Clock>
      </div>     
    );
  }
}

export default App;
