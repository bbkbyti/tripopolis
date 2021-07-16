import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


export default function Footer() {
  return (
    <div className=" bg-gray-800 text-white p-1 mt-auto flex justify-evenly items-center font-serif" >
      <div className="flex">
        <div className=" flex ">
        <a href="https://www.linkedin.com/in/babak-bayati-8bb990202" target="_blank" rel="noreferrer">
          <FaLinkedin />
          </a>
      </div>
      <div>
        <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
     </div>
      <div>
        <a href="https://twitter.com/babakBayattii" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        </div>
        
        </div>
      <div>
      <p>©Babak Bayati 2021</p>
      </div>
    </div>
  );
}
