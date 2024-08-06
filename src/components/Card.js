import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--location">
                <img src="../images/location-dot.png" className="card--icon" />
                <h4>{props.location}</h4>
            </div>
            <h5 className="card--title">{props.title}</h5>
            <a href={props.googleMaps}>View on Google Maps</a>
            <h6 className="card--price">{props.description}</h6>
        </div>
    )
}