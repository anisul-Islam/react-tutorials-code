import React from 'react'
import './style.css'

export default function CARD(props) {
    const {title, desc} = props
    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();

    return (
        <div>
            <div  className="card-style">
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>{date}</p>
            </div>            
        </div>
    )
}
