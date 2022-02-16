import React from 'react';
import {Link} from 'react-router-dom'
function Uculture() {
  const tour=[{
    name:"kumba mela",
    img:  '../upculture/upc1.jpg',
    href:'https://www.holidify.com/pages/culture-of-uttar-pradesh-206.html'
  },
  {
    name:"FOlk",
    img: '../upculture/upc2.jpg',
    href:'https://www.holidify.com/pages/culture-of-uttar-pradesh-206.html'
  },
  {
    name:"Lord Krishna",
    img: '../upculture/upc3.jpg',
    href:'https://www.holidify.com/pages/culture-of-uttar-pradesh-206.html'
  },
  {
    name:"kathak",
    img: '../delhiculture/dc4.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'
  },
  {
    name:"Pietra Dura",
    img: '../delhiculture/dc10.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'
  },
  {
    name:"kumba mela",
    img: '../delhiculture/dc5.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'
  },
  {
    name:"kushinagr",
    img: '../delhiculture/dc6.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'
  },
  {
    name:"Taj Mahal",
    img: '../delhiculture/dc9.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'
  },
  {
    name:"Tomb of Akbar Great",
    img: '../delhiculture/dc7.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'
  },
  {
    name:"Mota",
    img: '../delhiculture/dc8.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Uttar_Pradesh'

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

export default Uculture;
