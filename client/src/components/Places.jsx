import axios from 'axios';
import {useState, useEffect} from 'react';
import { BASE_URL, headers } from "../services"

export default function Places() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        const fetchPlaces = async () => {
            const res = await axios.get(BASE_URL, {
                headers,

            });
            setPlaces(res.data.records);
        };
        fetchPlaces();
    }, [])






    return (
        <div>
            {places.map((place) => {
                return <div>{place.fields.country}</div>
            })}
        </div>
    )
}
