import React from 'react';
import data from "./data";
import Card from "./Card";
import Hero from"./Hero";

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
            item = {item}
            />
        )
    })
    return(
        <div className="main-body">
            <Hero />
            <section className="cards-list">{cards}
            </section>
        </div>
    )
}