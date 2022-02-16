import React, { Component } from 'react';
// import Delhicards from '../cards/Delhicards';
import Delhislides from '../slides/Delhislides';
import Upcards from '../cards/Upcards'

import {Link} from "react-router-dom";
import Footer from '../Footer';
import Contact from '../Contact';


export class Delhi extends Component {
  render() {
          const text={
            color:"coral"
            }
    return (
        <div>
                 <center><h3><code>I AM HERE TO SHOW DELHI</code></h3></center>
                <Delhislides />
                <div>
                    <center>
                    <h2 style={text}><b><i>Please Select Your Requirement</i></b></h2>
                    <Link to="/delhi/tourism"><kbd className='button'>Tourism</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/delhi/food"><kbd className='button'>Food</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/delhi/culture"><kbd className='button'>Culture&Tradition</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/delhi/festival"><kbd className='button'>Festival</kbd></Link>
                    </center>
                    </div>
                    <Upcards />
                    <Contact />
                    <Footer />
          </div>
    )
}
}

export default Delhi;
