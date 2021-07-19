import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar({ toggle }) {
    return (
        <div className='nav'>
 <nav className="flex justify-between items-center h-16 bg-gray-700 text-white relative shadow-sm font-serif">
            <Link to="/" className="pl-8">
                <div className="font-bold text-xl italic">Tripopolis</div>
            </Link>
            <div className="px-4 cursor-pointer md:hidden " onClick={toggle}>
                <GiHamburgerMenu />
            </div>
            <div className="pr-8 md:block hidden  ">

                <Link className="">
                    About
                </Link>
                <Link className="p-4 " to="/new-place">
                    Share your favorite places
                </Link>
                <Link className="p-4" to="/places">
                    All Places
                </Link>

            </div>
        </nav>
        </div>
       
    )
}
