import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ScoreCard from './ScoreCard'
import Spinner from './Spinner'


export class Scores extends Component {
  static defaultProps={
    type: 'live'
  }
  static propTypes={
    type: PropTypes.string,
  }
  articles = [
    {
            "matchType": "International",
            "seriesMatches": [
                {
                    "seriesAdWrapper": {
                        "seriesId": 10587,
                        "seriesName": "Asia Cup 2025",
                        "matches": [
                            {
                                "matchInfo": {
                                    "matchId": 130124,
                                    "seriesId": 10587,
                                    "seriesName": "Asia Cup 2025",
                                    "matchDesc": "Super Fours, Match 1 (B1 v B2)",
                                    "matchFormat": "T20",
                                    "startDate": "1758378600000",
                                    "endDate": "1758391200000",
                                    "state": "Toss",
                                    "status": "Bangladesh opt to bowl",
                                    "team1": {
                                        "teamId": 5,
                                        "teamName": "Sri Lanka",
                                        "teamSName": "SL",
                                        "imageId": 172119
                                    },
                                    "team2": {
                                        "teamId": 6,
                                        "teamName": "Bangladesh",
                                        "teamSName": "BAN",
                                        "imageId": 172120
                                    },
                                    "venueInfo": {
                                        "id": 153,
                                        "ground": "Dubai International Cricket Stadium",
                                        "city": "Dubai",
                                        "timezone": "+04:00",
                                        "latitude": "25.046842",
                                        "longitude": "55.218969"
                                    },
                                    "isTournament": true,
                                    "seriesStartDt": "1757289600000",
                                    "seriesEndDt": "1759104000000",
                                    "isTimeAnnounced": true,
                                    "stateTitle": "Toss"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "matchType": "Domestic",
            "seriesMatches": [
                {
                    "seriesAdWrapper": {
                        "seriesId": 9273,
                        "seriesName": "England Domestic One-Day Cup 2025",
                        "matches": [
                            {
                                "matchInfo": {
                                    "matchId": 111985,
                                    "seriesId": 9273,
                                    "seriesName": "England Domestic One-Day Cup 2025",
                                    "matchDesc": "Final",
                                    "matchFormat": "ODI",
                                    "startDate": "1758362400000",
                                    "endDate": "1758391200000",
                                    "state": "In Progress",
                                    "status": "Match reduced to 45 overs due to rain",
                                    "team1": {
                                        "teamId": 153,
                                        "teamName": "Hampshire",
                                        "teamSName": "HAM",
                                        "imageId": 172220
                                    },
                                    "team2": {
                                        "teamId": 147,
                                        "teamName": "Worcestershire",
                                        "teamSName": "WORCS",
                                        "imageId": 172214
                                    },
                                    "venueInfo": {
                                        "id": 18,
                                        "ground": "Trent Bridge",
                                        "city": "Nottingham",
                                        "timezone": "+01:00",
                                        "latitude": "52.936884",
                                        "longitude": "-1.132230"
                                    },
                                    "currBatTeamId": 153,
                                    "seriesStartDt": "1754265600000",
                                    "seriesEndDt": "1758412800000",
                                    "isTimeAnnounced": true,
                                    "stateTitle": "In Progress"
                                },
                                "matchScore": {
                                    "team1Score": {
                                        "inngs1": {
                                            "inningsId": 1,
                                            "runs": 229,
                                            "wickets": 6,
                                            "overs": 44.2
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "matchType": "Women",
            "seriesMatches": [
                {
                    "seriesAdWrapper": {
                        "seriesId": 9929,
                        "seriesName": "Australia Women tour of India, 2025",
                        "matches": [
                            {
                                "matchInfo": {
                                    "matchId": 119834,
                                    "seriesId": 9929,
                                    "seriesName": "Australia Women tour of India, 2025",
                                    "matchDesc": "3rd ODI",
                                    "matchFormat": "ODI",
                                    "startDate": "1758355200000",
                                    "endDate": "1758384000000",
                                    "state": "In Progress",
                                    "status": "India Women need 152 runs",
                                    "team1": {
                                        "teamId": 100,
                                        "teamName": "Australia Women",
                                        "teamSName": "AUSW",
                                        "imageId": 172192
                                    },
                                    "team2": {
                                        "teamId": 97,
                                        "teamName": "India Women",
                                        "teamSName": "INDW",
                                        "imageId": 172189
                                    },
                                    "venueInfo": {
                                        "id": 51,
                                        "ground": "Arun Jaitley Stadium",
                                        "city": "Delhi",
                                        "timezone": "+05:30",
                                        "latitude": "28.637891",
                                        "longitude": "77.243073"
                                    },
                                    "currBatTeamId": 97,
                                    "seriesStartDt": "1757721600000",
                                    "seriesEndDt": "1758412800000",
                                    "isTimeAnnounced": true,
                                    "stateTitle": "In Progress"
                                },
                                "matchScore": {
                                    "team1Score": {
                                        "inngs1": {
                                            "inningsId": 1,
                                            "runs": 412,
                                            "wickets": 10,
                                            "overs": 47.5
                                        }
                                    },
                                    "team2Score": {
                                        "inngs1": {
                                            "inningsId": 2,
                                            "runs": 261,
                                            "wickets": 6,
                                            "overs": 28.6
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    "ad": {
                        "name": "native_matches",
                        "layout": "native_large",
                        "position": 3
                    }
                }
            ]
        }
  ]

  constructor() {
    super();
    console.log("constructor from scores")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }


//     componentDidMount() {
//   this.fetchMatches();
//   this.interval = setInterval(this.fetchMatches, 60000); // 1 minute
// }

// componentWillUnmount() {
//   clearInterval(this.interval);
// }

// fetchMatches = async () => {
 
  
//   try {
//     let url = `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${this.props.type}`;
    
//     let options = {
//       method: "GET",
//       headers: {
        
//         "X-RapidAPI-Key": "d8de258d21msh96065a13b9506c0p108b56jsnc3eecd186240",
//         "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com"
//       }
//     };
//     this.setState({loading: true});
//     let data = await fetch(url, options);
//     console.log(data);
//     let parsedData = await data.json();
//     console.log(parsedData.typeMatches);
    
//     this.setState({ articles: parsedData.typeMatches ,
//       loading: false
//     });
//     console.log(this.state.articles);
//   } catch (err) {
//     console.error("API error:", err);
//   }
// }


  //   handlePreviousClick= async ()=>{
  //   console.log("previouse")
  //    let url=`https://api.cricapi.com/v1/currentMatches?apikey=f7da89bf-c58e-4d8d-8fd5-adda566f0e76&offset=0&page=${this.state.page-1}&pageSize=6`;
  //     let data= await fetch(url);
  //     let parsedData=await data.json();
  //     console.log(parsedData);

  //     this.setState({
  //       articles: parsedData.data,
  //       page: this.state.page-1
  //     })
  //   }


  //  handleNextClick= async ()=>{
  //   if(this.state.page+1 > Math.ceil(this.state.totalResults/6)){

  //   }
  //     else{

  //       console.log("next")
  //      let url=`https://api.cricapi.com/v1/currentMatches?apikey=f7da89bf-c58e-4d8d-8fd5-adda566f0e76&offset=0&page=${this.state.page+1}&pageSize=6`;
  //     let data= await fetch(url);
  //     let parsedData=await data.json();
  //     console.log(parsedData);

  //     this.setState({
  //       articles: parsedData.data,
  //       page: this.state.page+1
  //     })
  //   }

  //  }
  render() {

    return (

      <div className="container my-3 ">
        <h2 className="text-center">Top Matches</h2>
      {this.state.loading && <Spinner/>}
       
          <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-3" matchid={ele.id}>
                
                <ScoreCard name={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchInfo?.matchDesc+" | "+ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchInfo?.seriesName}
                  //  url1={ele.seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team1.imageId} 
                  //  url2={ele.seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team2.imageId} 
                  team1={ele.seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team1.teamSName}
                  team2={ele.seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team2.teamSName}
                  r1={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchScore?.team1Score?.inngs1?.runs ?? "0"} 
                  w1={ ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchScore?.team1Score?.inngs1?.wickets ?? "0"} 
                  o1={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchScore?.team1Score?.inngs1?.overs ?? "0"}
                  r2={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchScore?.team2Score?.inngs1?.runs ?? "0"} 
                  w2={ ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchScore?.team2Score?.inngs1?.wickets ?? "0"} 
                  o2={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchScore?.team2Score?.inngs1?.overs ?? "0"}
                  status={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchInfo?.status ?? ""}
                  matchid={ele.seriesMatches[0]?.seriesAdWrapper?.matches[0]?.matchInfo?.matchId}
                  />
              </div>
            )

          })}


        </div>
        
        
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}



      </div>
    )
  }
}

export default Scores