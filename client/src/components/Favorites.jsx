import axios from 'axios';
import { useState, useEffect } from 'react';
import {  headers, UPLOAD } from "../services"

import FavoritesCard from './FavoritesCard';

export default function Places() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const fetchFavorites = async () => {
            const res = await axios.get(UPLOAD, {
                headers,

            });
            setFavorites(res.data.records);
        };
        fetchFavorites();
    }, [])

    return (

        <div>
            <div 
            className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 min-h-screen '
            >
            {favorites.map((favorite) => {
                return <FavoritesCard favorite={favorite} />
            })}
        </div>
        </div>
        
    )
}
