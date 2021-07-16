import React from "react";
import { Link } from "react-router-dom";

export default function PlaceCard({ place }) {
    const { id, fields } = place;

    return (
        <Link to={`/places/${id}`}>
            <div class="p-10 bg-yellow-400 min-h-screen" >
                <div className="bg-white rounded overflow-hidden shadow-lg bg-opacity-25">
                <img    class=" w-full grid grid-cols-6 gap-3  lg:grid-cols-3 h-32 object-cover"
                        src={fields.image}
                        alt=""/>
                    <div class="text-gray-900 font-bold text-xl flex ">
                                {fields.city}
                            </div>
                </div>
                    
                        </div>
            </Link>
    );
}
