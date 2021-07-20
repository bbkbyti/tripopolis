import React from 'react'
import { Link } from "react-router-dom";


export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-700 font-serif" >
            <h1 className="italic text-5xl pt-4  bg-gray-500 text-gray-100 lg:p-4 lg:mx-64 ">Tripopolis</h1>

            <div className="bg-gray-500 text-xl lg::mx-64 lg:mt-auto lg:mb-auto">
            <div className=" pt-8 lg:text-4xl text-white lg:mx-64 leading-loose lg:mt-5">
                <div>
                <p>We are a website where you can share your travel moments and favorite places with your family, friends and all the world. Come and share your story with us, and let's go on this amazing journey together.
                </p>
                </div>
            </div>


            <div className="flex justify-center items-center md:mt-10 mt-32">
            <Link to="/places">
            <p className="px-7 py-7 text-white lg:text-4xl text-3xl mt-16 bg-gray-700 transition duration-500 hover:opacity-90 transform ease-in-out hover:-translate-y-1 hover:scale-110 font-serif italic mb-10"> Let's Go Places Then!</p>
            </Link>    
            </div>
            </div>
        </div>)
}
