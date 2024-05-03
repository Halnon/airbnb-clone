import React from "react"

export default function Card() {
    return (
        <div className='katie--zaferes'>
            <img src='src\images\katie-zaferes.png' alt='main card image'/>
            <div className='p--first'>
                <img src='src\images\star.png' alt='star icon'/>
                <p>5.0 <span className='grey'>(6) •  USA</span></p>
            </div>
            <h2>Life lessons with Katie Zaferes</h2>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}