import React, { Component } from 'react'
import Live from './Live'
import {
  Link,
  Outlet,
  useParams
} from "react-router-dom";


const Detail = (props)=> {
  const {id}=useParams();
  
    
    return (
      <>
        <h1 className="text-center">Match Details</h1>
        <hr />
        <ul className="nav nav-pills nav-fill nav-underline">
          <li className="nav-item">
            <Link  className="nav-link active"  to="live">Live</Link>
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
export default Detail
