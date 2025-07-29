import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navigation-menu'>
        <ol>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/terms-and-conditions"}>Terms and Conditions</Link></li>
            <li><Link to={"/"}>Shooting Analysis Form</Link></li>
        </ol>
    </div>

  )
}

export default Navbar
