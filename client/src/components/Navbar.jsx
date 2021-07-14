import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div>
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
