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

        <div>
            <img src={place.fields?.image} alt=" " />
            <h1>{place.fields?.location}</h1>
            <h2>{place.fields?.city}</h2>
            <h3>{place.fields?.country}</h3>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>

        </div>


    )
}
