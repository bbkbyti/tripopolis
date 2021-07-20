import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { BASE_URL, headers } from "../services";
import { useHistory } from "react-router-dom";


export default function PlaceDetail() {
    const [place, setPlace] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchPlace = async () => {
            const URL = `${BASE_URL}/${id}`;
            const res = await axios.get(URL, { headers });

            setPlace(res.data)
        }
        fetchPlace();

    }, [id]);

    if (!place.fields) {
        return <div>Loading...</div>;
    }

    const handleDelete = async () => {
        const URL = `${BASE_URL}/${id}`;
        await axios.delete(URL, { headers });
        history.push('/places')
    }
    return (

        <div className=" bg-gray-600 min-h-screen overflow-hidden md:flex md:justify-center md:items-center md:flex-col md:text-2xl lg:grid lg:grid-cols-2 lg:min-h-screen ">
            <img className=""
                src={place.fields?.image} alt=" " />
            <div>
                <div className="font font-semibold italic text-white capitalize">
                    <div className="font-black text-xl mt-5 mb-3">

                        <h1>{place.fields?.location}</h1>
                    </div>

                    <div className="uppercase font-bold text-lg"><h2>
                        {place.fields?.city}</h2>
                    </div>
                    <div className="uppercase font-bold mb-5">
                        <h3>{place.fields?.country}</h3>
                    </div>
                    <div className=" bg-gray-500 font-serif px-6 py-5 text-white  rounded-2xl mr-12 ml-12 transition duration-500 hover:opacity-90 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                        <p>{place.fields?.description}</p>
                    </div>

                </div>
                <div className="">
                    <button onClick={handleDelete} className="bg-red-400 hover:bg-red-700 text-white px-10 py-2 rounded-lg mt-5 mb-5 font-bold md:text-sm">Delete</button>
                </div>
            </div>

        </div>


    )
}
