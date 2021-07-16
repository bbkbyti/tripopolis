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

        <div className=" min-h-screen items-center justify-center lg:flex lg:flex-col md:flex md:flex-col  overflow-hidden">
            <img className="flex  max-w-screen-prose lg:mb-5 lg:w-8/12 lg:h-8/12 md:mb-5 md:w-8/12 md:h-8/12"
            src={place.fields?.image} alt=" " />
            <div>
            <h1>{place.fields?.location}</h1>
            <h2>{place.fields?.city}</h2>
            <h3>{place.fields?.country}</h3>
            <p>{place.fields?.description}</p>
            </div>
            

            

            <div>
                <button onClick={handleDelete} className="bg-red-400 text-white px-2 py-1">Delete</button>
            </div>

        </div>


    )
}
