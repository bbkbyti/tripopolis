import React from 'react'
import { Link } from 'react-router-dom'

export default function PlaceCard({ place }) {
    const { id, fields } = place;

    return (
        <Link to={`/places/${id}`}>
            <div>
                <img src={fields.image} alt={fields.city} width="80px" height="90px" />
                <h1>{fields.city}</h1>
            </div>
        </Link>

    )
}
