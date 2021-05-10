import React from 'react';
import './style.css';
import imgSearch from '../../assets/icons/search.png';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
/**
* @author
* @function Navbar

**/

const Navbar = (props) => {
  const [search,setSearch]=useState(false);
  const submitSearch=(e)=>{
    e.preventDefault();
    alert('Searched');
  }
  const openSearch=()=>{
    
    setSearch(true);
    
  }
  const searchClass=search?'searchinput.active' : 'searchinput';
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li > <NavLink to='/'>Home</NavLink></li>
        <li > <NavLink to='/about-us'>About Us</NavLink></li>
        <li > <NavLink to='/post/1'>Posts</NavLink></li>
        <li ><NavLink to='/contact-us'>Contact Us</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input className={searchClass} type="text" placeholder="Search" />
          <img onClick={openSearch} className="searchicon" src={imgSearch} alt="serach" />        </form>


      </div>
    </div>
  )

}

export default Navbar
