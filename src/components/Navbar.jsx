import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
return (
    <nav className="navbar">
    <div className="logo">
        <Link to="/">ECHO<span>EXOTICA</span></Link>
    </div>
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nature">Nature</Link></li>
        <li><Link to="/humans">Humans</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/info">Info</Link></li>
        
    </ul>
    </nav>
)
};

export default Navbar;