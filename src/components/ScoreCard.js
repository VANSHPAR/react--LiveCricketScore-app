import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Detail from './Detail';
import {
  Link
} from "react-router-dom";

const ScoreCard = (props)=> {
  
  
     let {name,r1,w1,o1,r2,w2,o2,status,id,team1,team2,url1,url2}=props;
     console.log("scorecard",id)
    return (
      <div className="my-3">
        <div className="card" >
          
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              {/* <img src={`https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index?lastId=${url1}`}  className="img-fluid" />  */}
              <span > {team1}     {r1}/{w1} ({o1})</span>
              <br />
              <br />
              {/* <img src={`https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index?lastId=${url2}`} className="img-fluid"/> */}
              <span > {team2}     {r2}/{w2} ({o2})</span>
              <p className="card-text text-info-emphasis">{status}</p>
              <Link to={`/detail/${id}`} className="btn btn-sm btn-primary" >Read More</Link>
            </div>
        </div>
      </div>
    )
  }


export default ScoreCard