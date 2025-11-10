import React, {
    Component, useEffect, useState
} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Spinner from './Spinner'

const Live = (props) => {
      const [articles, setArticles] = useState([])
       const [loading, setloading] = useState(false)
       const {id} = useParams()
       const lastInning = articles?.scorecard?.[articles?.scorecard?.length - 1];
      const apikey=process.env.REACT_APP_LIVESCORE_API2
      // console.log("Match id",id)
    
     useEffect(() => {
       const cached=sessionStorage.getItem(`${id}`)
      if(cached){
        setArticles(JSON.parse(cached))
        return
      }
       fetchMatches()
     }, [id]);

    //        componentDidMount() {
    //    this.
    //    this.interval = setInterval(this.fetchMatches, 60000);  1 minute
    //  }

    //  componentWillUnmount() {
    //    clearInterval(this.interval);
    //  }

     const fetchMatches = async () => {
   
    
    try {
      setloading(true)
      let url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}/hscard`;
      
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
      sessionStorage.setItem(`${id}`,JSON.stringify(parsedData))
      setloading(false)
     // console.log('daa',articles);
    } catch (err) {
      console.error("API error:", err);
    }
  
   }

   useEffect(() => {
  // console.log("✅ Updated articles:", articles);
  }, [articles]);




    return (
        <>
        {loading && <Spinner/>}
            <div>
                <div className="my-3">
                    <div className="card border-dark mb-3" >

                        <div className="card-body">
                            {articles?.scorecard?.map((inning,index)=>(
                                <div key={index}>
                            {/* <img src={`https:cricbuzz-cricket.p.rapidapi.com/photos/v1/index?lastId=${url1}`}  className="img-fluid" />  */}
                            <span > {inning?.batteamname}     {inning?.score}/{inning?.wickets} ({inning?.overs})</span>
                            <br />
                            <br />
                            </div>
                            ))}
                            <div className="text-danger">{articles?.status}</div>
                        </div>
                    </div>
                </div>
                {articles?.ismatchcomplete===false && (
                    <>
                      <table className="table table-bordered ">
                    <thead className="table-success">
                        <tr>
                            <th scope="col">Batters</th>
                            <th scope="col">R</th>
                            <th scope="col">B</th>
                            <th scope="col">4s</th>
                            <th scope="col">6s</th>
                            <th scope="col">SR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lastInning?.batsman?.map((b) => (b.outdec==="batting" ) ? (
                            
                              <tr key={b.id}>
                              <th scope="row">{b.name}
                                <div className="text-muted">{b.outdec}</div>
                              </th>

                              <td>{b.runs}</td>
                              <td>{b.balls}</td>
                              <td>{b.fours}</td>
                              <td>{b.sixes}</td>
                              <td>{b.strkrate}</td>
                            </tr>
                           
                            
                          )  : null )}


                    </tbody>
                </table>
                <table className="table table-bordered ">
                    <thead className="table-success">
                        <tr>
                            <th scope="col">Bowlers</th>
                            <th scope="col">O</th>
                            <th scope="col">M</th>
                            <th scope="col">R</th>
                            <th scope="col">W</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th scope="row">{lastInning?.bowler?.[0].name}</th>
                            <td>{lastInning?.bowler?.[0].overs}</td>
                            <td>{lastInning?.bowler?.[0].runs}</td>
                            <td>{lastInning?.bowler?.[0].maidens}</td>
                            <td>{lastInning?.bowler?.[0].wickets}</td>

                        </tr>
                        <tr>
                             <th scope="row">{lastInning?.bowler?.[1].name}</th>
                            <td>{lastInning?.bowler?.[1].overs}</td>
                            <td>{lastInning?.bowler?.[1].runs}</td>
                            <td>{lastInning?.bowler?.[1].maidens}</td>
                            <td>{lastInning?.bowler?.[1].wickets}</td>
                        </tr>

                    </tbody>
                </table>
                    </>
                )}
               
               

            </div>
        </>


    )
}
export default Live

