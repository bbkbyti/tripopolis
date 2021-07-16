import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4 font-mono">
      Home
      </Link>
      <Link to="/new-place" className="p-4 font-mono">
      Share your favorite places!
      </Link>
      <Link to="/places" className="p-4 font-mono">
      All Places
      </Link>
    </div>
  );
}

export default Dropdown;