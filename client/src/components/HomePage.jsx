import React from 'react'
import { Link } from "react-router-dom";
import "./HomePage.css";


export default function HomePage() {
    return (

        <div className="bg-hero-lg bg-no-repeat h-screen bg-cover overflow-hidden  lg:bg-bbk lg:bg-cover "  >

            <div className="bg-gray-700 opacity-90 mt-10 rounded-3xl mr-8 ml-8 h-20">
                <Link to="/places">
                    <p className="text-2xl font-serif text-white py-5">All Places</p>
                </Link>
            </div>
            <Link to="/new-place">
                <div className="bg-gray-700 opacity-90 mt-10 rounded-3xl mr-8 ml-8 h-20 px-2">
                    <p className="text-2xl font-serif text-white py-5">Share Your Favorite Place</p>
                </div>
            </Link>
            <div className="bg-gray-700 opacity-90 mt-10 rounded-3xl mr-8 ml-8 h-20">
                <p className="text-2xl font-serif text-white py-5">My Favorite Places</p>
            </div>
        </div>
    )
}
