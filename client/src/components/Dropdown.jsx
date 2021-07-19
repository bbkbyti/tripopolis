import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-gray-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4 font-serif text-white">
      Home
      </Link>
      <Link to="/new-place" className="p-4 font-serif text-white">
      Share
      </Link>
      <Link to="/places" className="p-4 font-serif text-white">
      All Places
      </Link>
      <Link to="/about" className="p-4 font-serif text-white">
        About
      </Link>
    </div>
  );
}

export default Dropdown;