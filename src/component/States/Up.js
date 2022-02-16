import React, { Component } from 'react';
import Upcards from '../cards/Upcards';
import Upslides from '../slides/Upslides';
import {
    Link
  } from "react-router-dom";
import Footer from '../Footer';
import Contact from '../Contact';
export class Up extends Component {
  render() {
          const text={
            color:"coral"
            }
    return (
        <div>
              <center><h3><code>I AM HERE TO SHOW UTTARPRADESH</code></h3></center>
            <Upslides />
                <div>
                    <center>
                    <h2 style={text}><b><i>Please Select Your Requirement</i></b></h2>
                    <Link to="/up/tourism"><kbd className='button'>Tourism</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/up/food"><kbd className='button'>Food</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/up/culture"><kbd className='button'>Culture&Tradition</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/up/festival"><kbd className='button'>Festival</kbd></Link>
                    </center>
                    </div>
                    <Upcards/>
                    <Contact />
                    <Footer/>
          </div>
    )
}
}

export default Up
