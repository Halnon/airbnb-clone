import React from 'react'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='grid--container--row'>

                <div className='grid--column'>
                    <div className='grid--item'><img src='\images\hero-grid\grid1.jpg' alt='grid1' /></div>
                </div>

                <div className='grid--column'>
                    <div className='grid--item'><img src='\images\hero-grid\grid2.jpg' alt='grid2' /></div>
                    <div className='grid--item'><img src='\images\hero-grid\grid3.jpg' alt='grid3' /></div>
                </div>

                <div className='grid--column'>
                    <div className='grid--item'><img src='\images\hero-grid\grid4.jpg' alt='grid4' /></div>
                    <div className='grid--item'><img src='\images\hero-grid\grid5.jpg' alt='grid5' /></div>
                </div>

                <div className='grid--column'>
                    <div className='grid--item'><img src='\images\hero-grid\grid6.jpg' alt='grid6' /></div>
                    <div className='grid--item'><img src='\images\hero-grid\grid7.jpg' alt='grid7' /></div>
                </div>

                <div className='grid--column'>
                    <div className='grid--item'><img src='\images\hero-grid\grid8.jpg' alt='grid8' /></div>
                    <div className='grid--item'><img src='\images\hero-grid\grid9.jpg' alt='grid9' /></div>
                </div>

            </div>
        
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}