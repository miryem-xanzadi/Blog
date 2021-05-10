import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu"> 
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/about-us'>About Us</NavLink>
        
        <NavLink to='/contact-us'>Contact Us</NavLink>
          

        </nav>
        <div>
            social Media Icons
        </div>
    </header>
   )

 }

export default Header