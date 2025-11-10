import React, { Component , useEffect , useState } from 'react'
import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from './Spinner'

const Matchinfo = ()=> {

  console.log(useParams())
//  const data=[
//   {
//   "matchInfo": {
//     "matchId": 41881,
//     "matchDescription": "Group A",
//     "matchFormat": "ODI",
//     "matchType": "domestic",
//     "complete": true,
//     "domestic": false,
//     "matchStartTimestamp": 1640410200000,
//     "matchCompleteTimestamp": 1640429211515,
//     "dayNight": false,
//     "year": 2021,
//     "state": "complete",
//     "team1": {
//       "id": 223,
//       "name": "Afghanistan U19",
//       "playerDetails": [
//         {
//           "id": 14269,
//           "name": "Suliman Arabzai",
//           "fullName": "Suliman Arabzai",
//           "nickName": "Suliman Arabzai",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22846,
//           "name": "Suliman Safi",
//           "fullName": "Suliman Safi",
//           "nickName": "Suliman Safi",
//           "captain": true,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "LEFT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22856,
//           "name": "Allah Noor",
//           "fullName": "Allah Noor",
//           "nickName": "Allah Noor",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm off break",
//           "faceImageId": 182026
//         },
//         {
//           "id": 23041,
//           "name": "Ijaz Ahmad Ahmadzai",
//           "fullName": "Ijaz Ahmad Ahmadzai",
//           "nickName": "Ijaz Ahmad Ahmadzai",
//           "captain": false,
//           "role": "Batting Allrounder",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 14198,
//           "name": "Ijaz Ahmad",
//           "fullName": "Ijaz Ahmad Azad",
//           "nickName": "Ijaz Ahmad",
//           "captain": false,
//           "role": "Batsman",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm off break",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22861,
//           "name": "Bilal Sami",
//           "fullName": "Bilal Sami",
//           "nickName": "Bilal Sami",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 14195,
//           "name": "Mohammad Ishaq",
//           "fullName": "Mohammad Ishaq",
//           "nickName": "Mohammad Ishaq",
//           "captain": false,
//           "role": "WK-Batsman",
//           "keeper": true,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22956,
//           "name": "Nangyalai Khan",
//           "fullName": "Nangyalai Khan",
//           "nickName": "Nangyalai Khan",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 15452,
//           "name": "Noor Ahmad",
//           "fullName": "Noor Ahmad",
//           "nickName": "Noor Ahmad",
//           "captain": false,
//           "role": "Bowler",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Left Arm chinaman",
//           "faceImageId": 226316
//         },
//         {
//           "id": 21781,
//           "name": "Izharulhaq Naveed",
//           "fullName": "Izharulhaq Naveed",
//           "nickName": "Izharulhaq Naveed",
//           "captain": false,
//           "role": "Bowler",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm leg break",
//           "faceImageId": 226315
//         },
//         {
//           "id": 23081,
//           "name": "Khalel Ahmad",
//           "fullName": "Khalel Ahmad",
//           "nickName": "Khalel Ahmad",
//           "captain": false,
//           "role": "Bowler",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm fast medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22851,
//           "name": "Bilal Sayedi",
//           "fullName": "Bilal Sayedi",
//           "nickName": "Bilal Sayedi",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 23046,
//           "name": "Faisal Khan Ahmadzai",
//           "fullName": "Faisal Khan Ahmadzai",
//           "nickName": "Faisal Khan Ahmadzai",
//           "captain": false,
//           "role": "Bowler",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "LEFT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22866,
//           "name": "Bilal Ahmad",
//           "fullName": "Bilal Ahmad",
//           "nickName": "Bilal Ahmad",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm fast medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22946,
//           "name": "Muhammadullah",
//           "fullName": "Muhammadullah",
//           "nickName": "Muhammadullah",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22951,
//           "name": "Khyber Wali",
//           "fullName": "Khyber Wali",
//           "nickName": "Khyber Wali",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22961,
//           "name": "Abdul Hadi",
//           "fullName": "Abdul Hadi",
//           "nickName": "Abdul Hadi",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22966,
//           "name": "Bilal Tarin",
//           "fullName": "Bilal Tarin",
//           "nickName": "Bilal Tarin",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22971,
//           "name": "Shahid Hassani",
//           "fullName": "Shahid Hassani",
//           "nickName": "Shahid Hassani",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 223,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         }
//       ],
//       "shortName": "AFGU19"
//     },
//     "team2": {
//       "id": 283,
//       "name": "United Arab Emirates U19",
//       "playerDetails": [
//         {
//           "id": 16074,
//           "name": "Kai Smith",
//           "fullName": "Kai Smith",
//           "nickName": "Kai Smith",
//           "captain": false,
//           "role": "Batsman",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22911,
//           "name": "Aryansh Sharma",
//           "fullName": "Aryansh Sharma",
//           "nickName": "Aryansh Sharma",
//           "captain": false,
//           "role": "",
//           "keeper": true,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 12387,
//           "name": "Dhruv Parashar",
//           "fullName": "Dhruv Parashar",
//           "nickName": "Dhruv Parashar",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 14227,
//           "name": "Alishan Sharafu",
//           "fullName": "Alishan Sharafu",
//           "nickName": "Alishan Sharafu",
//           "captain": true,
//           "role": "Batting Allrounder",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22831,
//           "name": "Punya Mehra",
//           "fullName": "Punya Mehra",
//           "nickName": "Punya Mehra",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm off break",
//           "faceImageId": 182026
//         },
//         {
//           "id": 16083,
//           "name": "Ali Naseer",
//           "fullName": "Ali Naseer",
//           "nickName": "Ali Naseer",
//           "captain": false,
//           "role": "Batsman",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22836,
//           "name": "Soorya Sathish",
//           "fullName": "Soorya Sathish",
//           "nickName": "Soorya Sathish",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22841,
//           "name": "Nilansh Keswani",
//           "fullName": "Nilansh Keswani",
//           "nickName": "Nilansh Keswani",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 23016,
//           "name": "Afzal Khan",
//           "fullName": "Aayan Afzal Khan",
//           "nickName": "Afzal Khan",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm off break",
//           "faceImageId": 182026
//         },
//         {
//           "id": 18683,
//           "name": "Adhitya Shetty",
//           "fullName": "Adhitya Shetty",
//           "nickName": "Adhitya Shetty",
//           "captain": false,
//           "role": "Bowler",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm leg break",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22906,
//           "name": "Sailles Jaishankar",
//           "fullName": "Sailles Jaishankar",
//           "nickName": "Sailles Jaishankar",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": false,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 23001,
//           "name": "Vijaya Raghavan",
//           "fullName": "Vinayak Vijaya Raghavan",
//           "nickName": "Vijaya Raghavan",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 14226,
//           "name": "Ronak Panoly",
//           "fullName": "Ronak Panoly",
//           "nickName": "Ronak Panoly",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "Right Arm medium",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22916,
//           "name": "Jash Giyanani",
//           "fullName": "Jash Giyanani",
//           "nickName": "Jash Giyanani",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22921,
//           "name": "Shival Bawa",
//           "fullName": "Shival Bawa",
//           "nickName": "Shival Bawa",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         },
//         {
//           "id": 22926,
//           "name": "Nilansh Keswani",
//           "fullName": "Nilansh Keswani",
//           "nickName": "Nilansh Keswani",
//           "captain": false,
//           "role": "",
//           "keeper": false,
//           "substitute": true,
//           "teamId": 283,
//           "battingStyle": "RIGHT",
//           "bowlingStyle": "",
//           "faceImageId": 182026
//         }
//       ],
//       "shortName": "UAEU19"
//     },
//     "series": {
//       "id": 3926,
//       "name": "ACC U19 Asia Cup 2021",
//       "seriesType": "",
//       "startDate": 1640131200000,
//       "endDate": 1640995200000,
//       "seriesFolder": "2021_U19_ASIA_CUP",
//       "odiSeriesResult": "''",
//       "t20SeriesResult": "",
//       "testSeriesResult": "",
//       "tournament": true
//     },
//     "umpire1": {
//       "id": 7540,
//       "name": "Naresh Shah",
//       "country": "KEN"
//     },
//     "umpire2": {
//       "id": 7244,
//       "name": "Sarika Prasad",
//       "country": "SIN"
//     },
//     "umpire3": {
//       "id": 8871,
//       "name": "KN Anantha Padmanabhan",
//       "country": "IND"
//     },
//     "referee": {
//       "id": 9070,
//       "name": "Akhtar Ahmad",
//       "country": "BAN"
//     },
//     "tossResults": {
//       "tossWinnerId": 283,
//       "tossWinnerName": "United Arab Emirates U19",
//       "decision": "Bowling"
//     },
//     "result": {
//       "resultType": "win",
//       "winningTeam": "Afghanistan U19",
//       "winningteamId": 223,
//       "winningMargin": 140,
//       "winByRuns": true,
//       "winByInnings": false
//     },
//     "venueinfo": {
//       "id": 289,
//       "name": "ICC Academy Ground",
//       "city": "Dubai",
//       "country": "United Arab Emirates",
//       "timezone": "+04:00",
//       "latitude": "25.036563",
//       "longitude": "55.227611"
//     },
//     "status": "United Arab Emirates U19 opt to bowl",
//     "playersOfTheMatch": [
//       {
//         "id": 22856,
//         "name": "Allah Noor",
//         "fullName": "Allah Noor",
//         "nickName": "Allah Noor",
//         "captain": false,
//         "keeper": false,
//         "substitute": false,
//         "teamName": "Afghanistan U19",
//         "faceImageId": 182026
//       }
//     ],
//     "playersOfTheSeries": [],
//     "revisedTarget": {
//       "reason": ""
//     },
//     "matchTeamInfo": [
//       {
//         "battingTeamId": 223,
//         "battingTeamShortName": "AFGU19",
//         "bowlingTeamId": 283,
//         "bowlingTeamShortName": "UAEU19"
//       },
//       {
//         "battingTeamId": 283,
//         "battingTeamShortName": "UAEU19",
//         "bowlingTeamId": 223,
//         "bowlingTeamShortName": "AFGU19"
//       }
//     ],
//     "isMatchNotCovered": false,
//     "HYSEnabled": 0
//   },
//   "venueinfoInfo": {
//     "established": 2009,
//     "capacity": null,
//     "knownAs": "ICC Global Cricket Academy",
//     "ends": "City End, Reem Raam End",
//     "city": "Dubai",
//     "country": "United Arab Emirates",
//     "timezone": "+04:00",
//     "homeTeam": "United Arab Emirates",
//     "floodlights": true,
//     "curator": "Toby Lumsden",
//     "profile": null,
//     "imageUrl": "http://i.cricketcb.com/i/stats/fth/540x303/venueinfo/images/289.jpg",
//     "ground": "ICC Academy Ground",
//     "groundLength": 0,
//     "groundWidth": 0,
//     "otherSports": null
//   }
// }
//  ]
const [articles, setArticles] = useState([])
const [loading, setloading] = useState(false)
const {id}=useParams()
const apikey=process.env.REACT_APP_LIVESCORE_API2
//console.log("id is ",id)

useEffect(() => {
   
  fetchMatches()

 
}, [id])

 
  // componentDidMount() {
  //   this.fetchMatches();
  //   this.interval = setInterval(this.fetchMatches, 60000); // 1 minute
  // }
  
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  
 const fetchMatches = async () => {
   
    
    try {
      setloading(true);
      let url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
      
      let options = {
        method: "GET",
        headers: {
          
         "X-RapidAPI-Key": apikey,
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com"
        }
      };
      
       let data = await fetch(url, options);
     // console.log(data);
      if(data.status===429){
        alert("API Limit Exceeded")
        setloading(false)
        return
      }
      //console.log(data);
      let parsedData = await data.json();
     // console.log(parsedData.typeMatches);
      
      setArticles(parsedData)
    
      setloading(false)
    } catch (err) {
      console.error("API error:", err);
    }
  }
  useEffect(() => {
      console.log("✅ Updated articles:", articles);
    }, [articles]);
    return (
      <>
       {loading && <Spinner/>}
       <table className="table table-bordered ">
                        <thead className="table-success">
                          <tr><th className="text-center" colSpan={3}>MatchInfo</th>
                          </tr>   
                        </thead>
                        <tbody>
                         
                            <tr >
                               <th scope="row">Match</th>
                              <td>{articles?.team1?.teamsname} vs {articles?.team2?.teamsname} | {articles?.matchdesc} | {articles?.seriesname} </td>
                            </tr>
                            <tr >
                               <th scope="row">Series</th>
                              <td>{articles?.seriesname} </td>
                            </tr>
                            <tr >
                               <th scope="row">Toss</th>
                              <td>{articles?.tossstatus}</td>
                            </tr>
                             <tr >
                               <th scope="row">venueinfo</th>
                              <td>{articles?.venueinfo?.ground}, {articles?.venueinfo?.city}, {articles?.venueinfo?.country} </td>
                            </tr>
                             <tr >
                               <th scope="row">Umpires</th>
                              <td>{articles?.umpire1?.name}, {articles?.umpire2?.name}</td>
                            </tr>
                            <tr >
                               <th scope="row">3rd Umpire</th>
                              <td>{articles?.umpire3?.name}</td>
                            </tr>
                             <tr >
                               <th scope="row">Refree</th>
                              <td>{articles?.referee?.name}</td>
                            </tr>

                            

                            
                            
                               
                          


                        </tbody>
                      </table>
      </>
    )
  }
export default Matchinfo
