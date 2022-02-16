import React from 'react';
import {Link} from 'react-router-dom'
function Ufood() {
  const tour=[{
    name:"Lucknow",
    img:  '../aprestaurent/vg.jpg',
    href:'https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html'
  },
  {
    name:"Noida",
    img: '../aprestaurent/thirupathi.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"
  },
  {
    name:"Ghaziabad",
    img: '../aprestaurent/rjy.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"varanasi",
    img: '../aprestaurent/r3.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"kanpur",
    img: '../aprestaurent/r4.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"Meerut",
    img: '../aprestaurent/r5.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"Bareilly",
    img: '../aprestaurent/r6.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"Mathura",
    img: '../aprestaurent/r7.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"Moradabad",
    img: '../aprestaurent/r8.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  },
  {
    name:"Jhansi",
    img: '../aprestaurent/r9.jpg',
    href:"https://www.tripadvisor.in/Restaurants-g297682-Uttar_Pradesh.html"

  }
]

  return (
    <div>
                    <center>
                    <h1><code>UP</code></h1>
                    <Link to='/up/tourism'><b>Tourism</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/up/food"><b>Food</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/up/culture"><b>Culture&Tradiion</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/up/festival"><b>Festival</b></Link>
                    </center>
           <center><h3><code>Are you Hugry!</code></h3></center>
           <div class='container'>
           <div class='row'>
                  {tour.map((data)=>{
                    return(
                        <div class='col-md-3'>
                    <div class="card" >
                    <img src={data.img} height='200' class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{data.name}</h5>
                      <a href={data.href} target="_" class="btn btn-primary">know more</a>
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

export default Ufood;
