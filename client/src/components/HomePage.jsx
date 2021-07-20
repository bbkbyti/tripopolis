import React from 'react'
import { Link } from "react-router-dom";



export default function HomePage() {
    return (

        <div className="bg-hero-lg bg-no-repeat h-screen bg-cover overflow-hidden  lg:bg-bbk lg:bg-cover  "  >

            <div className="md:mt-40 mt-20 lg:40 justify-around flex flex-col">
                <div className="bg-gray-700 opacity-90 mt-10 rounded-3xl  md:mx-44 lg:mx-64 h-20 transition duration-500 hover:opacity-90 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Link to="/places">
                        <p className="text-2xl font-serif text-white py-5">All Places</p>
                    </Link>
                </div>
                <Link to="/new-place">
                    <div className="bg-gray-700 opacity-90 mt-16 rounded-3xl  md:mx-44 lg:mx-64 h-20 transition duration-500 hover:opacity-90 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                        <p className="text-2xl font-serif text-white py-5">Share Your Favorite Place</p>
                    </div>
                </Link>
                <Link to="/favorites">
                    <div className="bg-gray-700 opacity-90 mt-16 rounded-3xl  md:mx-44 lg:mx-64 h-20 transition duration-500 hover:opacity-90 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                        <p className="text-2xl font-serif text-white py-5">My Favorite Places</p>
                    </div>
                </Link>


            </div>


        </div>
    )
}
