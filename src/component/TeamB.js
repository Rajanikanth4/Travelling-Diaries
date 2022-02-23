import React,{useState, useEffect} from 'react'
import axios from 'axios'
export default function TeamB(props) {
    const [data, setData]=useState([])
    const getMembers=async()=>{   
        const url='https://newsapi.org/v2/everything?q=tesla&from=2022-01-22&sortBy=publishedAt&apiKey=6f19958a2a494d1991c05fb129b682f7'     
        const res=await axios.get(url)
       setData(res.data.articles)
    }
    useEffect(()=>{
        getMembers()
    })
    return (
        <div>
           <center><h3><code>{props.name2} </code></h3></center>
           <div class='container'>
           <div class='row'>
                  {data.map((data)=>{
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
    )
}

 TeamB.defaultProps={
     name2:"Tourism Guide Team B"
 }

