import React from 'react';
import {Link} from 'react-router-dom'
function Dfestival() {
  const tour=[{
    name:"Diwali",
    img:  '../delhifestival/df1.jpg',
    href:'https://so.city/delhi/article/8-things-you-should-definitely-do-to-make-the-most-of-your-diwali-in-delhi'
  },
  {
    name:"Eid",
    img: '../delhifestival/df2.jpg',
    href:'https://www.hindustantimes.com/india-news/people-celebrate-eid-ul-adha-offer-namaz-at-homes-in-delhi-amid-pandemic-101626847476299.html'
  },
  {
    name:"Holi",
    img: '../delhifestival/df3.jpg',
    href:'https://traveltriangle.com/blog/holi-parties-in-delhi/'

  },
  {
    name:"Navratri and Dussehra",
    img: '../delhifestival/df4.jpg',
    href:'https://www.revv.co.in/blogs/dussehra-celebration-in-delhi-ncr/'

  },
  {
    name:"Durga Puja",
    img: '../delhifestival/df5.jpg',
    href:'https://www.holidify.com/pages/durga-puja-in-delhi-3000.html'

  },
  {
    name:"Lohri",
    img: '../delhifestival/df6.jpg',
    href:'https://www.artofliving.org/in-en/culture/festival/lohri-2021-all-you-want-to-know-about-lohri?utm_source=gglsearchads&utm_medium=cpc&utm_campaign=introtalk2021&gclid=CjwKCAiA9aKQBhBREiwAyGP5laKsGTgzMBvXQGBi_9ivEUd6tPmukmzaCjRZ_d_CJvGQIljuJsqgvhoClg0QAvD_BwE'

  },
  {
    name:"Independence Day",
    img: '../delhifestival/df7.jpg',
    href:'https://knowindia.india.gov.in/independence-day-celebration/'
  },
  {
    name:"Republic Day",
    img: '../delhifestival/df8.jpg',
    href:'https://www.mygov.in/campaigns/republic-day-2021/#:~:text=Republic%20Day%20is%20celebrated%20on,Indian%20National%20Flag%20by%20Dr'

  },
  {
    name:"Guru Nanak Jayanti",
    img: '../delhifestival/df9.jpg',
    href:'https://www.business-standard.com/about/when-is-guru-nanak-jayanti'

  },
  {
    name:"Holi",
    img: '../delhifestival/df3.jpg',
    href:'https://traveltriangle.com/blog/holi-parties-in-delhi/'
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
           <center><h3><code>I Am Here To Celebrate</code></h3></center>
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

export default Dfestival;
