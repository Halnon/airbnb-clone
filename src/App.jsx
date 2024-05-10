import React from "react"
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import data from './data.js';

export default function App() {
    const cardData = data.map((data) => {
        return <Card 
                    key={data.id}
                    data={data}
                />
    })
    return (
        <div>
            <NavBar />
            <Hero />
            <section className='cards-list'>
                {cardData}
            </section>
            
        </div>
    )
}