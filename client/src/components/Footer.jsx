import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLinux } from "react-icons/si";


export default function Footer() {
  return (
    <div className=" bg-gray-800 text-white p-1 mt-auto flex justify-evenly items-center font-serif s" >
      <div className="flex">
        <div className=" flex pr-5 transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://www.linkedin.com/in/babak-bayati-8bb990202" target="_blank" rel="noreferrer">
            <FaLinkedin size="20" />
          </a>
        </div>
        <div className=" flex pr-5 transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer">
            <FaGithub size="20" />
          </a>
        </div>
        <div className="transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
          <a href="https://twitter.com/babakBayattii" target="_blank" rel="noreferrer">
            <FaTwitter size="20" />
          </a>
        </div>

      </div>
      <div>
        <p className="lg:text-2xl ">©Babak Bayati 2021</p>
      </div>
      <div>
        <SiLinux size="40" />
      </div>
    </div>
  );
}
