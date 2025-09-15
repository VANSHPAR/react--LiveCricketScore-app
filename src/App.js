
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Scores from './components/Scores';

export default class App extends Component {
 
  render() {
    return (
      <div>
       <Navbar/>
       <Scores/>
      </div>
    )
  }
}


