import React from 'react';
import {Link} from 'react-router-dom'
function Tourism() {
  const tour=[{
    name:"vizag",
    img:  '../aptour/vizag.jpg',
    amount:"1200",
    offer:'50%off',
    href:'https://en.wikipedia.org/wiki/Visakhapatnam'
  },
  {
    name:"vijayawada",
    img: '../aptour/vijayawada.jpg',
    amount:"2000",
    offer:'60%off',
    href:'https://en.wikipedia.org/wiki/Vijayawada'
  },
  {
    name:"Thirupathi",
    img: '../aptour/thirupathi.jpg',
    amount:"1000",
    offer:'70%off',
    href:'https://en.wikipedia.org/wiki/Tirupati'

  },
  {
    name:"srisailam",
    img: '../aptour/srisailam.jpg',
    amount:"1520",
    offer:'10%off',
    href:'https://en.wikipedia.org/wiki/Srisailam'

  },
  {
    name:"srikalahasti",
    img: '../aptour/srikalahasthi.jpg',
    amount:"1299",
    offer:'20%off',
    href:'https://en.wikipedia.org/wiki/Srikalahasti'

  },
  {
    name:"Rajamundry",
    img: '../aptour/rajamundry.jpg',
    amount:"1399",
    offer:'30%off',
    href:'https://en.wikipedia.org/wiki/Rajahmundry'

  },
  {
    name:"papikonda National park",
    img: '../aptour/papikonda.jpg',
    amount:"1900",
    offer:'40%off',
    href:'https://en.wikipedia.org/wiki/Papikonda_National_Park'

  },
  {
    name:"Mantralaya",
    img: '../aptour/mantralaya.jpg',
    amount:"1200",
    offer:'80%off',
    href:'https://en.wikipedia.org/wiki/Mantralayam'

  },
  {
    name:"Araku valley",
    img: '../aptour/araku.jpg',
    amount:"800",
    offer:'30%off',
    href:'https://vizagtourism.org.in/araku-valley-vizag'

  },
  {
    name:"Ahobilam",
    img: '../aptour/ahobilam.jpg',
    amount:"2500",
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
                      <p class="card-title">{data.name}</p>
                      <h5>₹{data.amount}/-</h5>
                      <p class='card-text'><mark>{data.offer}</mark></p>
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

export default Tourism;
