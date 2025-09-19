import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ScoreCard extends Component {
  
  render() {
     let {name,r1,w1,o1,r2,w2,o2,status,matchid,team1,team2,url1,url2}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <img src={url1} className="img-fluid" /> 
              <span > {team1}     {r1}/{w1} ({o1})</span>
              <br />
              <br />
              <img src={url2} className="img-fluid"/>
              <span > {team2}     {r2}/{w2} ({o2})</span>
              <p className="card-text">{status}</p>
              <a href="/matchdetail/" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default ScoreCard