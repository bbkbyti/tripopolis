import React from 'react'
import { Link } from "react-router-dom";
import "./HomePage.css";


export default function HomePage() {
    return (
        <div>

            <Link to="/places">
                {/* <h3>My Favorite Places</h3> */}
            </Link>

            <div className='wrapper'>
                <div className="sliding-background"></div>
            </div>
        </div>
    )
}
