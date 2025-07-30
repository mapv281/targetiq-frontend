import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navigation-menu'>
        <ol>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/terms-and-disclaimer"}>Terms of Use and Disclaimer</Link></li>
            <li><Link to={"/"}>Request Shooting Analysis Report</Link></li>
        
        </ol>
    </div>

  )
}

export default Navbar
