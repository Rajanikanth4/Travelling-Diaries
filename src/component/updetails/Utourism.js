import React from 'react';
import {Link} from 'react-router-dom'
function Utourism() {
  const tour=[{
    name:"Agra",
    img:  '../uptour/upt1.jpg',
    offer:'50%off',
    href:'https://www.holidify.com/state/uttar-pradesh/top-destinations-places-to-visit.html    '
  },
  {
    name:"Varnasi",
    img: '../uptour/upt2.jpg',
    offer:'60%off',
    href:'https://www.holidify.com/places/varanasi'
  },
  {
    name:"Vrindavan",
    img: '../uptour/upt3.jpg',
    offer:'10%off',
    href:"https://www.holidify.com/places/vrindavan"
  },
  {
    name:"Lucknow",
    img: '../uptour/upt4.jpg',
    offer:'20%off',
    href:'https://www.holidify.com/places/lucknow'

  },
  {
    name:"Allahabad",
    img: '../uptour/upt5.jpg',
    offer:'30%off',
    href:'https://www.holidify.com/places/allahabad'

  },
  {
    name:"sarnath",
    img: '../uptour/upt6.jpg',
    offer:'40%off',
    href:'https://www.holidify.com/places/sarnath'

  },
  {
    name:"Mathura",
    img: '../uptour/upt7.jpg',
    offer:'20%off',
    href:'https://www.holidify.com/places/mathura'

  },
  {
    name:"Fatehpur Sikri",
    img: '../uptour/upt8.jpg',
    offer:'60%off',
    href:'https://www.holidify.com/places/agra/fatehpur-sikri-sightseeing-1015.html    '
  },
  {
    name:"Vindyachal",
    img: '../uptour/upt9.jpg',
    offer:'30%off',
    href:'https://www.holidify.com/places/vindhyachal'
  },
  {
    name:"Chitrakoot",
    img: '../uptour/upt10.jpg',
    offer:'80%off',
    href:'https://www.holidify.com/places/chitrakoot'
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
           <center><h3><code>Up Tourism Pakages</code></h3></center>
           <div class='container'>
           <div class='row'>
                  {tour.map((data)=>{
                    return(
                        <div class='col-md-3'>
                    <div class="card" >
                    <img src={data.img} height="200" class="card-img-top" alt="..." />
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

export default Utourism;
