import React from 'react';
import {Link} from 'react-router-dom'
function Festival() {
  const tour=[{
    name:"Pongal",
    img:  '../apfestivals/apf1.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'
  },
  {
    name:"Ugadhi",
    img: '../apfestivals/apf2.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'
  },
  {
    name:"Ganesh Chaturthi",
    img: '../apfestivals/apf3.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  },
  {
    name:"Maha sivarathri",
    img: '../apfestivals/apf4.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  },
  {
    name:"Deepavali",
    img: '../apfestivals/apf5.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  },
  {
    name:"Srevari Mahotsavam",
    img: '../apfestivals/apf6.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  },
  {
    name:"Budha Jayanthi",
    img: '../apfestivals/apf7.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  },
  {
    name:"Visaka Utsav",
    img: '../apfestivals/apf8.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'
  },
  {
    name:"Dussera",
    img: '../apfestivals/apf8.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  },
  {
    name:"Pongal",
    img: '../apfestivals/apf1.jpg',
    href: 'https://www.holidify.com/collections/festivals-of-andhra-pradesh'

  }
]
  return (
    <div>
      <center>
      <h1><code>Andra Pradesh</code></h1>
      <Link  to="/tourism"><b>Tourism</b></Link>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/food"><b>Food</b></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/culture"><b>Culture&Tradiion</b></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/festival"><b>Festival</b></Link>
           </center>
           <center><h3><code>I Am Here To Celebrate</code></h3></center>
           <div class='container'>
           <div class='row'>
                  {tour.map((data)=>{
                    return(
                        <div class='col-md-4'>
                    <div class="card" >
                    <img src={data.img} height='200'class="card-img-top" alt="..." />
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

export default Festival;
