import React from 'react'
import './style.css'

export default function CARD() {

    const todoTitle = "Call Family"
    const todoDesc = "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt."
    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();

    return (
        <div>
            <div  className="card-style">
                <h3>{todoTitle}</h3>
                <p>{todoDesc}</p>
                <p>{date}</p>
            </div>            
        </div>
    )
}
