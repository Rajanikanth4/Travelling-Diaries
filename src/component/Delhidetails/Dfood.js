import React from 'react';
import {Link} from 'react-router-dom'
function Dfood() {
  const tour=[{
    name:"Thyme",
    img:  '../aprestaurent/vg.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d8052069-Reviews-Thyme-New_Delhi_National_Capital_Territory_of_Delhi.html'
  },
  {
    name:"Dilli 32",
    img: '../aprestaurent/thirupathi.jpg',
    href:'https://www.tripadvisor.in/ShowUserReviews-g304551-d3704190-r653668976-Dilli_32-New_Delhi_National_Capital_Territory_of_Delhi.html'
  },
  {
    name:"Spring",
    img: '../aprestaurent/rjy.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d3511797-Reviews-Spring-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Mosaic",
    img: '../aprestaurent/r3.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d8703583-Reviews-Mosaic-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Edesia",
    img: '../aprestaurent/r4.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d4462993-Reviews-Edesia_Crowne_Plaza_Today_New_Delhi_Okhla-New_Delhi_National_Capital_Territory_of.html'

  },
  {
    name:"Annamaya",
    img: '../aprestaurent/r5.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d11928132-Reviews-AnnaMaya-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Yijing",
    img: '../aprestaurent/r6.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d19467427-Reviews-Yi_Jing-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Rajsik",
    img: '../aprestaurent/r7.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d14188340-Reviews-Raajsik-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Infinity",
    img: '../aprestaurent/r8.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d5069812-Reviews-Infinity-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Tamra",
    img: '../aprestaurent/r9.jpg',
    href:'https://www.tripadvisor.in/Restaurant_Review-g304551-d7680723-Reviews-Tamra-New_Delhi_National_Capital_Territory_of_Delhi.html'

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
           <center><h3><code>Are you Hugry!</code></h3></center>
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

export default Dfood;
