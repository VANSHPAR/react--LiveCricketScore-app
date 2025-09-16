import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ScoreCard extends Component {
  
  render() {
     let {name,score,matchType,status}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">name</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="/" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default ScoreCard