import React from 'react';
import {Link} from 'react-router-dom'
function Tourism() {
  const tour=[{
    name:"Qutub Minar",
    img:  '../Delhitour/dt1.jpg',
    amount:'1900',
    offer:'50%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d311626-Reviews-Qutub_Minar-New_Delhi_National_Capital_Territory_of_Delhi.html'
  },
  {
    name:"Swaminarayan Akshardham",
    img: '../Delhitour/dt2.jpg',
    amount:'1600',
    offer:'60%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d626913-Reviews-Swaminarayan_Akshardham-New_Delhi_National_Capital_Territory_of_Delhi.html'
  },
  {
    name:"Gurudwara Bangla Sahib",
    img: '../Delhitour/dt3.jpg',
    amount:'1500',
    offer:'10%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d3681196-Reviews-Gurudwara_Bangla_Sahib-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:" Humayun's Tomb",
    img: '../Delhitour/dt4.jpg',
    amount:'1300',
    offer:'20%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d311618-Reviews-Humayun_s_Tomb-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Lodhi Garden",
    img: '../Delhitour/dt5.jpg',
    amount:'1900',
    offer:'30%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d324106-Reviews-Lodhi_Garden-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Delhi Airport Metro Express",
    img: '../Delhitour/dt6.jpg',
    amount:'1580',
    offer:'40%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d8064356-Reviews-Delhi_Airport_Metro_Express-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Chandhi chok",
    img: '../Delhitour/dt7.jpg',
    amount:'2600',
    offer:'20%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d311613-Reviews-Chandni_Chowk-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"India Gate",
    img: '../Delhitour/dt8.jpg',
    amount:'3000',
    offer:'60%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d321493-Reviews-India_Gate-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Mughal Garden",
    img: '../Delhitour/dt9.jpg',
    amount:'2900',
    offer:'30%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d6438182-Reviews-Mughal_Garden-New_Delhi_National_Capital_Territory_of_Delhi.html'

  },
  {
    name:"Rashtrapathi Bhavan",
    img: '../Delhitour/dt10.jpg',
    amount:'2150',
    offer:'80%off',
    href:'https://www.tripadvisor.in/Attraction_Review-g304551-d321495-Reviews-Rashtrapati_Bhavan-New_Delhi_National_Capital_Territory_of_Delhi.html'

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
           <center><h3><code>Delhi Tourism Pakages</code></h3></center>
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
