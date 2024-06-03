// Imports 
import React from "react";
import { Link } from "react-router-dom";

// Component
const Navbar = ({}) => {
    return (
        <nav className="navbar">
            <Link to="/" id="navbar-text">Home</Link>
        </nav>
    )
};

export default Navbar;