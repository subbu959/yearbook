import React from 'react';
export default function Card(props) {
    return(
        <div className="card">
            <img src={props.item.image} className="card--image" />
            <div className="card-content">
                <span className="card-location">{props.item.name}</span><br/>
                <span classname="card-spot">{props.item.rollno}</span>
            </div>
        </div>
    )
}