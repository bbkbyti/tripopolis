import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL, headers } from "../services"

import PlaceCard from './PlaceCard';

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
            <div
                className=' min-h-screen lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 hover:b '
            >
                {places.map((place,) => {
                    return <PlaceCard place={place} />
                })}
            </div>
        </div>

    )
}
