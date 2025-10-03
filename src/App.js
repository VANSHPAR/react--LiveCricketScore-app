
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Scores from './components/Scores';
import About from './components/About';
import Detail from './components/Detail';
import Live from './components/Live';
import Hscorecard from './components/Hscorecard';

import Matchinfo from './components/Matchinfo';
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
                 
                 <Route exact path="/" element={<Scores key="live" type="live"/>} />
                 <Route exact path="/recent" element={<Scores key="recent" type="recent"/>} />
                 <Route exact path="/upcoming" element={<Scores key="upcoming" type="upcoming"/>} />
                 <Route exact path="/about" element={<About />} />
                 <Route  path="/detail/:matchId" element={<Detail />} >
                 <Route index element={<Live />}/>
                 <Route  path="live/:matchId" element={<Live />} />
                <Route  path="hscorecard/:matchId" element={<Hscorecard />} />
                 <Route  path="matchinfo/:matchId" element={<Matchinfo />} />
                 </Route>
                 
       
       
       
               </Routes>
       
       </Router>
      </div>
    )
  }
}


