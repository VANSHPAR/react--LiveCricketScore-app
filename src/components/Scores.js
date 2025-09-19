import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ScoreCard from './ScoreCard'

export class Scores extends Component {

  constructor(){
    super();
    console.log("constructor from scores")
    this.state={
       articles: [],
       loading: false,
       page: 1
    }
  }

  async componentDidMount(){
    let url="<your api key>&pageSize=6";
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.data,totalResults: parsedData.length})
  }
   

  handlePreviousClick= async ()=>{
  console.log("previouse")
   let url=`<your api key>&page=${this.state.page-1}&pageSize=6`;
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
      articles: parsedData.data,
      page: this.state.page-1
    })
  }


 handleNextClick= async ()=>{
  if(this.state.page+1 > Math.ceil(this.state.totalResults/6)){

  }
    else{

      console.log("next")
     let url=`<your api key>&page=${this.state.page+1}&pageSize=6`;
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
      articles: parsedData.data,
      page: this.state.page+1
    })
  }
    
  }
  render() {
   
    return (
     
      <div className="container my-3 ">
        <h2>Top Matches</h2>
       
        <div className="row">
           {this.state.articles.map((ele)=>{
            return(
            <div className="col-md-3" matchid={ele.id}>
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
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>



      </div>
    )
  }
}

export default Scores