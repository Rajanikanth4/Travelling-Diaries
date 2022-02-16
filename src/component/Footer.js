import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const ff={
        backgroundColor:"gray",
        color:"white"
    }
    return (
      <div  style={ff}>
          <div class='row'>
               <div class="col-sm-2">
                     <p><small>About</small></p>
                     <p>Contact Us</p>
                     <p>About Us</p>
               </div>
               <div class="col-sm-2">
                     <p><small>Policy</small></p>
                     <p>Terms of use</p>
                     <p>Security</p>
                     <p>Privacy</p>
               </div>
               <div class="col-sm-2">
                     <p><small>Social</small></p>
                     <p>Facebook</p>
                     <p>Twitter</p>
                     <p>Instaram</p>
                     <p>Youtube</p>
               </div>
               <div class="col-sm-2">
                     <p><small>Mail Us</small></p>
                     <p>travellingdaires@gmail.com</p>
                     <p>CEPTA Institute</p>
                     <p>Noida</p>
                     <p>Uttarpradesh</p>
               </div>
               <div class="col-sm-2">
                     <p><small>Registered Office Address</small></p>
                     <p>Trangile services</p>
                     <p>Noida</p>
                     <p>Uttarpradesh</p>
                     <p>Telephone:1900 8500 9000 4000</p>
               </div>
               <div class="col-sm-2">
                     <p><small>copy rights</small></p>
                     <p>all rights reserved by</p>
                     <p>K.Rajanikanth</p>
               </div>
          </div>
      </div>
    )
  }
}

export default Footer