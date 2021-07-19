import React from "react";
import { Link } from "react-router-dom";

export default function FavoritesCard({ favorite }) {
  const { id, fields } = favorite;

  return (
    <div className=" p-10 bg-gray-400 overflow-hidden font-serif ">
      <div className="rounded overflow-hidden shadow-lg  bg-gray-700 relative  transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
        <img className=" w-full  h-32 object-cover" src={fields.image} alt="" />
        <Link to={`/favorites/${id}`}>
          <div className="text-white font-black text-xl m-4 flex capitalize bg">
            {fields.city}
          </div>
        </Link>
      </div>
    </div>
  );
}
