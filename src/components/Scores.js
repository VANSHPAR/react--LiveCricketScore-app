import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ScoreCard from './ScoreCard'

export class Scores extends Component {
  articles= [
    {
      "id": "2d448290-d882-4e67-9a4a-f62dfea9a51a",
      "name": "Western Australia vs New South Wales, Final",
      "status": "Western Australia won by 18 runs",
      "matchType": "odi",
      "venue": "Junction Oval, Melbourne",
      "date": "2022-03-10",
      "dateTimeGMT": "2022-03-10T23:30:00",
      "teams": [
        "Western Australia",
        "New South Wales"
      ],
      "score": [
        {
          "r": 207,
          "w": 10,
          "o": 46.3,
          "inning": "Western Australia Inning 1"
        },
        {
          "r": 225,
          "w": 9,
          "o": 50,
          "inning": "New South Wales Inning 1"
        }
      ],
      "series_id": "ff5aa3f3-7164-4766-be90-3b64783257a0",
      "fantasyEnabled": false
    }
  ]
  constructor(){
    super();
    console.log("constructor from scores")
    this.state={

    }
  }

  render() {
   
    return (
      <div className="container my-3 ">
        <h2>Top Matches</h2>
        <div className="row">
          <div className="col-md-3">
            <ScoreCard />
          </div>
          <div className="col-md-3">
            <ScoreCard />
          </div>
          <div className="col-md-3">
            <ScoreCard />
          </div>
          <div className="col-md-3">
            <ScoreCard />
          </div>
          <div className="col-md-3">
            <ScoreCard />
          </div>
          <div className="col-md-3">
            <ScoreCard />
          </div>


        </div>




      </div>
    )
  }
}

export default Scores