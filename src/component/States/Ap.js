import React from 'react'
import Upcards from '../cards/Upcards'
import NewApSlides from '../slides/NewApSlides'
import {Link} from "react-router-dom";
import Footer from '../Footer';
import Contact from '../Contact';
export default function Ap() {
const text={
    color:"coral"
    }        
        return (
            <div>
                <center><h3><code>I AM HERE TO SHOW ANDRAPRADESH</code></h3></center>
                <NewApSlides />
                <div>
                    <center>
                        <h2 style={text}><b><i>Please Select Your Requirement</i></b></h2>
                    <Link to="/tourism"><kbd className='button'>Tourism</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/food"><kbd className='button'>Food</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/culture"><kbd className='button'>Culture&Tradiion</kbd></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/festival"><kbd className='button'>Festival</kbd></Link>
                    </center>
                    </div>
                    <br />
                    <Upcards/>
                    <Contact />
                    <Footer />
            </div>
        )
    
}

