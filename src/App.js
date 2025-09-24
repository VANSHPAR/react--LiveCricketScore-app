
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Scores from './components/Scores';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       
       <Routes>
                 
                 <Route exact path="/" element={<Scores type="live"/>} />
                 <Route exact path="/recent" element={<Scores type="recent"/>} />
                 <Route exact path="/upcoming" element={<Scores type="upcoming"/>} />
                {/* // <Route exact path="/about" element={<About />} /> */}
       
       
       
               </Routes>
       
       </Router>
      </div>
    )
  }
}


