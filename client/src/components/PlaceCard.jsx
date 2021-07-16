import React from "react";
import { Link } from "react-router-dom";

export default function PlaceCard({ place }) {
    const { id, fields } = place;

    return (
        
            <div className=" p-10 bg-gray-300"  >
                <div className="bg-white rounded overflow-hidden shadow-lg bg-opacity-25 relative hover:from-red-600">
                <img    class=" w-full grid h-32 object-cover"
                        src={fields.image}
                        alt=""/>
                        <Link to={`/places/${id}`}>
                        <div class="text-gray-900 font-black text-xl m-4 flex capitalize" >
                                {fields.city}
                            </div>
                        </Link>
                    
                </div>
                    
                        </div>
            
    );
}
