import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <Link className="navbar-text" to="/">F-website</Link>
            <div className="nav-inside">
                <Link className="nav-text" to="/">H o m e</Link>
                <Link className="nav-text" to="/post">P o s t</Link>
                <Link className="nav-text" to="/about">a b o u t</Link>
            </div>

        </div>
    )
}

export default Navbar;