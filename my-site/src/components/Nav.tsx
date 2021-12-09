import React from 'react'
import {Link} from 'gatsby'
import  '../components/Nav.css'
// import style from './Nav.module.css'

function Nav() {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link> 
            <Link to="/About">About</Link> 
            <Link to="/contact">contact</Link>
           
        </div>
    )
}

export default Nav
