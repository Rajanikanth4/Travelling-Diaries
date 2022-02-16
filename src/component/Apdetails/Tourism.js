import React from 'react';
import {Link} from 'react-router-dom'
function Tourism() {
  const tour=[{
    name:"vizag",
    img:  '../aptour/vizag.jpg',
    offer:'50%off',
    href:'https://en.wikipedia.org/wiki/Visakhapatnam'
  },
  {
    name:"vijayawada",
    img: '../aptour/vijayawada.jpg',
    offer:'60%off',
    href:'https://en.wikipedia.org/wiki/Vijayawada'
  },
  {
    name:"Thirupathi",
    img: '../aptour/thirupathi.jpg',
    offer:'70%off',
    href:'https://en.wikipedia.org/wiki/Tirupati'

  },
  {
    name:"srisailam",
    img: '../aptour/srisailam.jpg',
    offer:'10%off',
    href:'https://en.wikipedia.org/wiki/Srisailam'

  },
  {
    name:"srikalahasti",
    img: '../aptour/srikalahasthi.jpg',
    offer:'20%off',
    href:'https://en.wikipedia.org/wiki/Srikalahasti'

  },
  {
    name:"Rajamundry",
    img: '../aptour/rajamundry.jpg',
    offer:'30%off',
    href:'https://en.wikipedia.org/wiki/Rajahmundry'

  },
  {
    name:"papikonda National park",
    img: '../aptour/papikonda.jpg',
    offer:'40%off',
    href:'https://en.wikipedia.org/wiki/Papikonda_National_Park'

  },
  {
    name:"Mantralaya",
    img: '../aptour/mantralaya.jpg',
    offer:'80%off',
    href:'https://en.wikipedia.org/wiki/Mantralayam'

  },
  {
    name:"Araku valley",
    img: '../aptour/araku.jpg',
    offer:'30%off',
    href:'https://vizagtourism.org.in/araku-valley-vizag'

  },
  {
    name:"Ahobilam",
    img: '../aptour/ahobilam.jpg',
    offer:'40%off',
    href:'https://en.wikipedia.org/wiki/Ahobilam'

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
           <center><h3><code>Andra Pradesh Tourism Pakages</code></h3></center>
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

export default Tourism;
