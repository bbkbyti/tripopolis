import React from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"


export default function Navbar({ toggle }) {
    return (
        <div className="">
            <nav className="flex flex-row justify-between items-center h-16 bg-gray-700 text-white relative shadow-sm font-serif lg:text-1xl md:text-xl">
                <Link to="/" className="pl-8">
                    <div className="font-bold text-xl italic transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                        <h1>Tripopolis</h1>
                    </div>
                </Link>
                <div className="px-4 cursor-pointer md:hidden " onClick={toggle}>
                    <GiHamburgerMenu />
                </div>
                <div className="pr-8 md:block hidden  ">

                    <Link className="p-4 " to="/new-place">
                        Share your favorite places
                    </Link>
                    <Link className="p-4" to="/places">
                        All Places
                    </Link>
                    <Link className="p-4" to="/about">
                        About
                    </Link>



                </div>

            </nav>
        </div>

    )
}
