import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import { BASE_URL, headers } from "../services"

export default function PlaceDetail() {
    const [place, setPlace] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const fetchPlace = async () => {
            const URL = `${BASE_URL}/${id}`;
            const res = await axios.get(URL, { headers });
            setPlace(res.data)
        }
        fetchPlace();

    }, []);
    return (
        
        <div>
            <img src={place.fields?.image}/>
            <h1>{place.fields?.location}</h1>
            <h2>{place.fields?.city}</h2>
            <h3>{place.fields?.country}</h3>
        </div>
        
        
    )
}
