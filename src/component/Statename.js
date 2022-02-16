import React from 'react'
import { Link } from 'react-router-dom'
export default function Statename(){
    const bb={
        borderStyle:"double",
        height:"45px",
    }
    const tt={
        position:"relative",
        left:"55px",
        
    }
   const tt2={
       position:"relative",
        left:"410px",
   }
        return (
            <div>
     <nav class="navbar navbar-expand-sm bg-danger " style={bb}>
                <div class="container-fluid" >
                <u1 class="navbar-nav">
                    <li class="nav-item">
                    <Link  to='/teamA' style={{color:"white", textDecoration:"none"}}><b>Team A</b></Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </u1>
                </div>
                <div class="container-fluid" style={tt}>
                    <ul class="navbar-nav">
                    <li class="nav-item" >
                    <Link to='/up' style={{color:"white", textDecoration:"none"}}><b>UttarPradesh</b></Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <li class="nav-item" >
                    <Link to='/delhi' style={{color:"white", textDecoration:"none"}}><b>Delhi</b></Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <li class="nav-item">
                    <Link to='/ap' style={{color:"white", textDecoration:"none"}}><b>AndhraPradesh</b></Link>
                    </li>
                    </ul>
                </div>
                <div class="container-fluid" style={tt2}>
                <u1 class="navbar-nav">
                <li class="nav-item">
                    <Link  to='/teamB' style={{color:"white", textDecoration:"none"}}><b>Team B</b></Link>
                    </li>
                    </u1>
                    </div>
                </nav>

                         </div>
        )
    }

