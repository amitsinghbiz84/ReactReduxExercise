import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueListing from './components/issuelisting';


class App extends Component {
  render() {
    return (
      <div className="container">

        <IssueListing/>
        
      </div>
    );
  }
}

export default App;
