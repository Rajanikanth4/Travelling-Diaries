import React from 'react';
import {Link} from 'react-router-dom'
function Culture() {
  const tour=[{
    name:"Yaganti Caves",
    img:  '../apculture/apc1.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/chittoor/sri-venkateswara-dhyana-vignan-mandiram.html'
  },
  {
    name:"Sri venkateswara Dayana vignan mandiram",
    img: '../apculture/apc2.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/caves-of-andhra-pradesh/yaganti-caves-yaganti.html'
  },
  {
    name:"Amarathi Museum",
    img: '../apculture/apc3.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/museums-in-andhra-pradesh/amaravati-museum.html'

  },
  {
    name:"Purani Hiveli",
    img: '../apculture/apc4.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/monuments-in-andhra-pradesh/purani-haveli.html'

  },
  {
    name:"AnanthaGiri Hills",
    img: '../apculture/apc5.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/hill-stations/anantagiri-hills.html'

  },
  {
    name:"Araku valley",
    img: '../apculture/apc6.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/hill-stations/araku-valley.html'

  },
  {
    name:"Ramakrishna Beach",
    img: '../apculture/apc7.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/beaches/ramkrishna-beach.html'

  },
  {
    name:"Ramoji FIlm City",
    img: '../apculture/apc8.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/hyderabad/ramoji-film-city.html'
  },
  {
    name:"Rishikonda Beach",
    img: '../apculture/apc9.jpeg',
    href:'https://www.indianholiday.com/tourist-attraction/andhra-pradesh/beaches/rishikonda-beach.html'

  },
  {
    name:"MahaNandhi",
    img: '../apculture/apc10.jpg',
    href:'https://en.wikipedia.org/wiki/Culture_of_Andhra_Pradesh'

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
           <center><h3><code>I am special</code></h3></center>
           <div class='container'>
           <div class='row'>
                  {tour.map((data)=>{
                    return(
                        <div class='col-md-4'>
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

export default Culture;
