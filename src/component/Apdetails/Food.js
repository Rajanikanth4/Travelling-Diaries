import React from 'react';
import {Link} from 'react-router-dom'
function Food() {
  const tour=[{
    name:"vizag",
    img:  '../aprestaurent/vg.jpg',
    href:'https://www.tripadvisor.in/Restaurants-g297588-Visakhapatnam_Visakhapatnam_District_Andhra_Pradesh.html'
  },
  {
    name:"vijayawada",
    img: '../aprestaurent/r3.jpg',
    href:'https://www.justdial.com/Vijayawada/Restaurants/nct-10408936?utm_source=adwords&utm_medium=codered&jdtracker=google_paid&gclid=CjwKCAiA9aKQBhBREiwAyGP5lS0MgvDAQd9wuW3aV0lgOhPRrMvIw4XdhXRyJ3EHDvFrC1NJA1noBxoCoe0QAvD_BwE'
  },
  {
    name:"Thirupathi",
    img: '../aprestaurent/thirupathi.jpg',
    href:'https://www.tripadvisor.in/Restaurants-g297587-Tirupati_Chittoor_District_Andhra_Pradesh.html'

  },
  {
    name:"srisailam",
    img: '../aprestaurent/r4.jpg',
    href:'https://www.tripadvisor.in/Restaurants-g2068870-Srisailam_Andhra_Pradesh.html'

  },
  {
    name:"srikalahasti",
    img: '../aprestaurent/r5.jpg',
    href:'https://www.google.com/search?q=restaurants+in+srikalahasthi&oq=restaurants+in+srikalahasthi&aqs=chrome..69i57j0i13l2j0i5i13i30l3.7603j0j15&sourceid=chrome&ie=UTF-8'

  },
  {
    name:"Rajamundry",
    img: '../aprestaurent/rjy.jpg',
    href:'https://www.justdial.com/Rajahmundry/Restaurants/nct-10408936?utm_source=adwords&utm_medium=codered&jdtracker=google_paid&gclid=CjwKCAiA9aKQBhBREiwAyGP5lQ5Odj_0LjEU_xUSGJKAkrqx4-UDOhcULLs8-rGe1e2wShMSHYEw9RoC2DYQAvD_BwE'

  },
  {
    name:"papikonda National park",
    img: '../aprestaurent/r7.jpg',
    href:'https://www.tripadvisor.in/Restaurants-g12421933-West_Godavari_District_Andhra_Pradesh.html'

  },
  {
    name:"Mantralaya",
    img: '../aprestaurent/r8.jpg',
    href:'https://www.google.com/search?q=restaurants+in+mantralaya&sxsrf=APq-WBsneXgByRSfrdj43Z-a3Df3C9ycIQ%3A1644750639781&ei=L-cIYq6OL_Dfz7sPqKyLsA4&ved=0ahUKEwju4YLNxfz1AhXw73MBHSjWAuYQ4dUDCA4&uact=5&oq=restaurants+in+mantralaya&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEdKBAhBGABKBAhGGABQ0wRY7hFgoRRoAHADeACAAQCIAQCSAQCYAQCgAQHIAQjAAQE&sclient=gws-wiz'

  },
  {
    name:"Araku valley",
    img: '../aprestaurent/araku.jpg',
    offer:'50%off',
    href:'https://www.tripadvisor.in/Restaurants-g1974063-Araku_Valley_Visakhapatnam_District_Andhra_Pradesh.html'

  },
  {
    name:"Ahobilam",
    img: '../aprestaurent/r10.jpg',
    offer:'50%off',
    href:'https://restaurant-guru.in/Ahobilam'

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
           <center><h3><code>Are you hungry!</code></h3></center>
           <div class='container'>
           <div class='row equal'>
                  {tour.map((data)=>{
                    return(
                        <div class='col-md-4'>
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

export default Food;
