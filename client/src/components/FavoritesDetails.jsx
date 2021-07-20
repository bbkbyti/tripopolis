import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UPLOAD, headers } from "../services";

export default function FavoritesDetails() {
  const [favorites, setFavorites] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    const fetchFavorites = async () => {
      const URL = `${UPLOAD}/${id}`;
      const res = await axios.get(URL, { headers });

      setFavorites(res.data);
    };
    fetchFavorites();
  }, [id]);

  if (!favorites.fields) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" bg-gray-600 min-h-screen lg:items-center lg:justify-center lg:flex lg:text-2xl overflow-hidden lg:flex-col md:flex md:justify-center md:items-center md:flex-col md:text-2xl">
      <img
        className=""
        src={favorites.fields?.image}
        alt=" "
      />
      <div>
        <div className="font font-semibold italic text-white">
          <div className="font-black text-xl mt-5 mb-3">
            <h1>{favorites.fields?.location}</h1>
          </div>
          <div className="uppercase font-bold text-lg">
            <h2>{favorites.fields?.city}</h2>
          </div>
          <div className="uppercase font-bold mb-5">
            <h3>{favorites.fields?.country}</h3>
          </div>
          <div className=" bg-gray-500 font-serif px-6 py-5 text-white  rounded-2xl mr-12 ml-12 transition duration-500 hover:opacity-90 transform ease-in-out hover:-translate-y-1 hover:scale-110">
            <p>{favorites.fields?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
