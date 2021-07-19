import React from "react";
import { Link } from "react-router-dom";

export default function PlaceCard({ place }) {
    const { id, fields } = place;

    return (
        // <div className="cards">
        //     <div className='card' >
        //         <div>
        //             <img src={fields.image} alt="" style={{ width: '100%', height: '300px' }} />
        //         </div>
        //         <div className='cityName'>
        //             <Link to={`/places/${id}`}>
        //             {fields.city}
        //             </Link>
        //         </div>
        //     </div>

        // </div>

        <div className=" p-10 bg-gray-400 overflow-hidden font-serif "  >
            <div className="rounded overflow-hidden shadow-lg  bg-gray-700 relative  transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110" >
            <img    className=" w-full  h-32 object-cover"
                    src={fields.image}
                    alt=""/>
                    <Link to={`/places/${id}`}>
                    <div className="text-white font-black text-xl m-4 flex capitalize bg" >
                            {fields.city}
                        </div>
                    </Link>

            </div>

                    </div>

    );
}
