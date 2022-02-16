import React from 'react';
import {Link} from 'react-router-dom'
function Dculture() {
  const tour=[{
    name:"Humayun Tomb",
    img:  '../delhiculture/dc1.jpg',
    href:'https://www.inspirock.com/india/new-delhi/humayuns-tomb-a111842853'
  },
  {
    name:"India Gate",
    img: '../delhiculture/dc2.jpg',
    href:'https://www.inspirock.com/india/new-delhi/india-gate-a612218103'
  },
  {
    name:"Akshardham",
    img: '../delhiculture/dc3.jpg',
    href:'https://www.inspirock.com/india/new-delhi/akshardham-a623824063'
  },
  {
    name:"Redfort",
    img: '../delhiculture/dc4.jpg',
    href:'https://www.inspirock.com/india/new-delhi/red-fort-a812150007'
  },
  {
    name:"Gurudwara Bangla Sahib",
    img: '../delhiculture/dc10.jpg',
    href:'https://www.inspirock.com/india/new-delhi/gurudwara-bangla-sahib-a3139886817'
  },
  {
    name:"Lotus Temple",
    img: '../delhiculture/dc5.jpg',
    href:'https://www.inspirock.com/india/new-delhi/lotus-temple-a111844411'
  },
  {
    name:"Old Delhi Bike Tour",
    img: '../delhiculture/dc6.jpg',
    href:'https://www.viator.com/tours/New-Delhi/Cycling-Delhi/d804-11094P6?eap=inspirock-32f16ed1fc6545999040c10b7e282d35_en-17895&aid=vba17895en'
  },
  {
    name:"jama Masjid",
    img: '../delhiculture/dc9.jpg',
    href:'https://www.inspirock.com/india/new-delhi/jama-masjid-a111842891'
  },
  {
    name:"Gandi Smriti",
    img: '../delhiculture/dc7.jpg',
    href:'https://www.inspirock.com/india/new-delhi/gandhi-smriti-a624383803'
  },
  {
    name:"National Museum",
    img: '../delhiculture/dc8.jpg',
    href:'https://www.inspirock.com/india/new-delhi/national-museum-a712149285'

  }
]

  return (
    <div>
                    <center>
                    <h1><code>Delhi</code></h1>
                    <Link to='/delhi/tourism'><b>Tourism</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/delhi/food"><b>Food</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/delhi/culture"><b>Culture&Tradiion</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/delhi/festival"><b>Festival</b></Link>
                    </center>
           <center><h3><code>I Am Special</code></h3></center>
           <div class='container'>
           <div class='row'>
                  {tour.map((data)=>{
                    return(
                        <div class='col-md-3'>
                    <div class="card" >
                    <img src={data.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{data.name}</h5>
                      <a href={data.href} target="_" class="btn btn-primary">know more</a>
                      <p class='card-text'><mark>{data.offer}</mark></p>
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

export default Dculture;
