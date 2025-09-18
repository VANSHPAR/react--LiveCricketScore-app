import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ScoreCard from './ScoreCard'

export class Scores extends Component {
  articles= [
   {
      "id": "81ac72e6-ad36-4d38-8122-a2a6556e2101",
      "name": "Zimbabwe vs Namibia, 2nd T20I",
      "matchType": "t20",
      "status": "Zimbabwe won by 5 wkts",
      "venue": "Queens Sports Club, Bulawayo",
      "date": "2025-09-16",
      "dateTimeGMT": "2025-09-16T11:30:00",
      "teams": [
        "Zimbabwe",
        "Namibia"
      ],
      "teamInfo": [
        {
          "name": "Namibia",
          "shortname": "NAM",
          "img": "https://g.cricapi.com/iapi/53-637877082656229722.webp?w=48"
        },
        {
          "name": "Zimbabwe",
          "shortname": "ZIM",
          "img": "https://g.cricapi.com/iapi/575-637877079629985215.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 169,
          "w": 6,
          "o": 20,
          "inning": "Namibia Inning 1"
        },
        {
          "r": 170,
          "w": 5,
          "o": 18.1,
          "inning": "Zimbabwe Inning 1"
        }
      ],
      "series_id": "3df66d82-3d4d-43d9-ac3c-c7740ab39959",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "dd9615e2-d2ec-47e3-a3cc-321bd99aeb15",
      "name": "Pakistan Women vs South Africa Women, 1st ODI",
      "matchType": "odi",
      "status": "South Africa Women won by 8 wkts",
      "venue": "Gaddafi Stadium, Lahore",
      "date": "2025-09-16",
      "dateTimeGMT": "2025-09-16T10:30:00",
      "teams": [
        "Pakistan Women",
        "South Africa Women"
      ],
      "teamInfo": [
        {
          "name": "Pakistan Women",
          "shortname": "PAKW",
          "img": "https://g.cricapi.com/iapi/67-637877074931980375.webp?w=48"
        },
        {
          "name": "South Africa Women",
          "shortname": "RSAW",
          "img": "https://g.cricapi.com/iapi/83-637877067733114809.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 255,
          "w": 4,
          "o": 50,
          "inning": "Pakistan Women Inning 1"
        },
        {
          "r": 259,
          "w": 2,
          "o": 48.2,
          "inning": "South Africa Women Inning 1"
        }
      ],
      "series_id": "9b1a8532-eb37-470a-982a-cb676c48b8ed",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "cb36ba79-3eeb-49fe-8886-b563ee4d3248",
      "name": "Queensland vs Victoria, 2nd Match",
      "matchType": "odi",
      "status": "Victoria need 285 runs",
      "venue": "Allan Border Field, Brisbane",
      "date": "2025-09-16",
      "dateTimeGMT": "2025-09-16T23:30:00",
      "teams": [
        "Queensland",
        "Victoria"
      ],
      "teamInfo": [
        {
          "name": "Queensland",
          "shortname": "QL",
          "img": "https://g.cricapi.com/iapi/73-637992667453177840.webp?w=48"
        },
        {
          "name": "Victoria",
          "shortname": "VIC",
          "img": "https://g.cricapi.com/iapi/96-637987557199223762.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 310,
          "w": 5,
          "o": 50,
          "inning": "Queensland Inning 1"
        },
        {
          "r": 26,
          "w": 3,
          "o": 7,
          "inning": "Victoria Inning 1"
        }
      ],
      "series_id": "6936514f-3840-49cc-98f7-bf47813182f8",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "c6bdaad8-1e93-4aa8-9e95-ee4d139caf0f",
      "name": "South Africa A vs New Zealand A, 2nd Unofficial Test",
      "matchType": "test",
      "status": "Day 3: Stumps - New Zealand A trail by 73 runs",
      "venue": "LC de Villiers Oval, Pretoria",
      "date": "2025-09-14",
      "dateTimeGMT": "2025-09-14T08:00:00",
      "teams": [
        "South Africa A",
        "New Zealand A"
      ],
      "teamInfo": [
        {
          "name": "New Zealand A",
          "shortname": "NZA",
          "img": "https://g.cricapi.com/iapi/2180-637982269820638615.webp?w=48"
        },
        {
          "name": "South Africa A",
          "shortname": "SA-A",
          "img": "https://g.cricapi.com/iapi/1132-637877069157056525.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 482,
          "w": 10,
          "o": 132,
          "inning": "New Zealand A Inning 1"
        },
        {
          "r": 578,
          "w": 8,
          "o": 115,
          "inning": "South Africa A Inning 1"
        },
        {
          "r": 23,
          "w": 0,
          "o": 10,
          "inning": "New Zealand A Inning 2"
        }
      ],
      "series_id": "4030ad04-213a-47c9-82c1-d4aa25fb790a",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "755648f2-6e74-4858-b6a4-c53b6dfbe1b4",
      "name": "Barbados Royals Women vs Trinbago Knight Riders Women, 6th Match",
      "matchType": "t20",
      "status": "Barbados Royals Women won by 7 wkts",
      "venue": "Providence Stadium, Guyana",
      "date": "2025-09-16",
      "dateTimeGMT": "2025-09-16T19:00:00",
      "teams": [
        "Barbados Royals Women",
        "Trinbago Knight Riders Women"
      ],
      "teamInfo": [
        {
          "name": "Barbados Royals Women",
          "shortname": "BRW",
          "img": "https://g.cricapi.com/iapi/2205-637992637355093702.webp?w=48"
        },
        {
          "name": "Trinbago Knight Riders Women",
          "shortname": "TKRW",
          "img": "https://g.cricapi.com/iapi/2207-637992637096525513.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 148,
          "w": 8,
          "o": 20,
          "inning": "Trinbago Knight Riders Women Inning 1"
        },
        {
          "r": 149,
          "w": 3,
          "o": 19.1,
          "inning": "Barbados Royals Women Inning 1"
        }
      ],
      "series_id": "b7853eca-d281-4429-838a-9cbf17bab47e",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "6a63e927-b897-41fc-886e-30cd2559ba31",
      "name": "Surrey vs Nottinghamshire, 64th Match",
      "matchType": "test",
      "status": "Day 2: Stumps - Nottinghamshire lead by 277 runs",
      "venue": "Kennington Oval, London",
      "date": "2025-09-15",
      "dateTimeGMT": "2025-09-15T10:00:00",
      "teams": [
        "Surrey",
        "Nottinghamshire"
      ],
      "teamInfo": [
        {
          "name": "Nottinghamshire",
          "shortname": "NOT",
          "img": "https://g.cricapi.com/iapi/1130-637889092060873937.webp?w=48"
        },
        {
          "name": "Surrey",
          "shortname": "SUR",
          "img": "https://g.cricapi.com/iapi/1133-637885552361099530.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 231,
          "w": 10,
          "o": 77.4,
          "inning": "Nottinghamshire Inning 1"
        },
        {
          "r": 173,
          "w": 10,
          "o": 52.2,
          "inning": "Surrey Inning 1"
        },
        {
          "r": 219,
          "w": 8,
          "o": 57,
          "inning": "Nottinghamshire Inning 2"
        }
      ],
      "series_id": "9362b075-d007-478c-b4a9-e08b9306caef",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    
    
  ]
  constructor(){
    super();
    console.log("constructor from scores")
    this.state={
       articles: this.articles,
       loading: false
    }
  }

  async componentDidMount(){
    let url="<your api key>";
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.data})
  }

  render() {
   
    return (
     
      <div className="container my-3 ">
        <h2>Top Matches</h2>
       
        <div className="row">
           {this.state.articles.map((ele)=>{
            return(
            <div className="col-md-3" matchId={ele.id}>
            <ScoreCard name={ele.name? ele.name:""}  
            url1={ele.teamInfo[0].img} 
            url2={ele.teamInfo[1].img} 
            team1={ele.teamInfo[0].shortname} 
            team2={ele.teamInfo[1].shortname} 
            r1={ele.score[0].r? ele.score[0].r :"0"} w1={ele.score[0].w?ele.score[0].w : "0"} o1={ele.score[0].o?ele.score[0].o : "0"} 
            r2={(ele.score.length===2 && ele.score[1].r )? ele.score[1].r :"0"} w2={( ele.score.length===2 && ele.score[1].w)?ele.score[1].w : "0"} o2={(ele.score.length===2 && ele.score[1].o)?ele.score[1].o : "0"} 
            status={ele.status}/>
          </div>
            )
            
           })}

          
        </div>




      </div>
    )
  }
}

export default Scores