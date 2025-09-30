import React, { Component } from 'react'
import Live from './Live'
import {
  Link,
  Outlet
} from "react-router-dom";

export default class Detail extends Component {
  
  render() {
    return (
      <>
        <h1 className="text-center">Match Details</h1>
        <hr />
        <ul className="nav nav-pills nav-fill nav-underline">
          <li className="nav-item">
            <Link className="nav-link active"  to="live">Live</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="hscorecard">Scorecard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="matchinfo">MatchInfo</Link>
          </li>
         
         
        </ul>
        <div className="mt-3">
          <Outlet />
        </div>
      </>
    )
  }
}
