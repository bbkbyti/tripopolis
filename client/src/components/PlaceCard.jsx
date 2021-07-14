import React from 'react'

export default function PlaceCard(props) {
    return (
        <div>
            <h3>{props.place.fields.country}</h3>
            <h1>{props.place.fields.city}</h1>
            <h2>{props.place.fields.location}</h2>
            <img src={props.place.fields.image}/>



        </div>
    )
}
