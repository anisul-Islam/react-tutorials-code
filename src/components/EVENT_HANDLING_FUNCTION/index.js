import React from 'react'
import './style.css'

export default function EVENT_HANDLING_FUNCTION() {

    const handleClick = () =>{
        console.log("button is clicked")
    }
    return (
        <div>
            <button onClick={handleClick}>Sign up</button>
        </div>
    )
}
