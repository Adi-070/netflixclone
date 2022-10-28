import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../logo.png"
import {BsSearch} from "react-icons/bs"


const Header = () => {
  return (
    <nav className='header'>
   
        <img src={logo} alt="logo" />
   
        <div>
            <Link to="/">Home</Link>
            <Link to="/Tvshows">TV shows</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/Recently Added">Recently Added</Link>
            <Link to="/My List">My List</Link>
        </div>

        

        
            <BsSearch />
        

    </nav>
  )
}

export default Header