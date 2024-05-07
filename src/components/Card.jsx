import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className='katie--zaferes'>
            <img src={`../src/images/${props.img}`} alt='main card image'/>
            <div className='p--first'>
                <img src='src\images\star.png' alt='star icon'/>
                <p>{props.rating}<span className='grey'>({props.reviewCount}) • {props.country}</span></p>
            </div>
            <h2>{props.title}</h2>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}