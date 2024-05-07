import React from "react"
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import data from './src/data.js';

export default function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Card 
                img='katie-zaferes.png'
                rating={5.0}
                reviewCount={6}
                country='USA'
                title='Life lessons with Katie Zaferes'
                price={136}
            />
        </div>
    )
}