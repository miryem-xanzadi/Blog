import React from 'react';
import './style.css';
import search from '../../assets/icons/search.png';
/**
* @author
* @function Navbar

**/

const Navbar  = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li > <a href='#'>Home</a></li>
            <li > <a href='#'>About Us</a></li>
            <li > <a href='#'>Posts</a></li>
            <li ><a href='#'>Contact Us</a></li>
        </ul>
<div className="search"> 
    <input type="text" placeholder="Search"/>
    <img src={search}  alt="serach" />
    
</div>
    </div>
   )

 }

export default Navbar
