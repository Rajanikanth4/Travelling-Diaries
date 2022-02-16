import React, { Component } from 'react';
import axios from 'axios';  
export default class Teammembers extends Component{
      state={
          data:[]
      }
      componentDidMount(){
          const url="https://newsapi.org/v2/everything?q=apple&from=2022-02-13&to=2022-02-13&sortBy=popularity&apiKey=6f19958a2a494d1991c05fb129b682f7 "
          axios.get(url)
          .then((res)=>{
              this.setState({data:res.data.articles})
              console.log(res.data)
          })
      }
      render(){
  return (
    <div>
           <center><h3><code>{this.props.name1}</code></h3></center>
           <div class='container'>
           <div class='row'>
                  {this.state.data.map((data)=>{
                    return(
                        <div class='col-md-3'>
                    <div class="card" >
                    <img src={data.urlToImage} height="200" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{data.source.name}</h5>
                    </div>
                  </div>
                  </div>
                    )
                  })}
              </div>
            </div>
          </div>  
  );
}
  }

  Teammembers.defaultProps={
    name1:"Tourism Guide Team A",
}
