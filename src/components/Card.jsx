import React from "react"

export default function Card(props) {
    return (
        <div className='component-img---main'>
            <img src={`public/images/${props.img}`} alt='main card image'/>
            <div className='p--first'>
                <img src='public/images/star.png' alt='star icon'/>
                <p>{props.rating}<span className='grey'>({props.reviewCount}) • {props.location}</span></p>
            </div>
            <h2>{props.title}</h2>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}