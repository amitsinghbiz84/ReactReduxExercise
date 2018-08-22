import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueListing from './components/issuelisting';
import IssueDescription from './components/issuedescription';

class App extends Component {
  render() {
    return (
      <div class="container">
        
        <IssueListing/>
        
      </div>
    );
  }
}

export default App;
