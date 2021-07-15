import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-evenly items-center h-13 bg-gray-400 text-black relative shadow-sm font-mono">
            <Link to="/">
            <h2>Tripopolis</h2>
            </Link>
            
            <Link to="/new-place">
            <h2>Share your favorite places!</h2>
            </Link>
            <Link to="/places"> 
            <h2>All Places</h2>
            </Link>
            </div> 

            
            
            
        </div>
    )
}
