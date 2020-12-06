import React from 'react'
import './style.css'

export default function CSS_STYLE() {

    const todoTitle = "Call Family"
    const todoDesc = "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt."
    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();

    /**
     * CSS Example - creating JS Object of a CSS Style
     */
    const cardStyle = {
        backgroundColor : 'palegreen', 
        width: '350px', 
        padding:'10px'
    }

    return (
        <div>

            {/* Inline CSS style Example  */}           
            <h1 style={{backgroundColor : 'purple', textAlign : 'center', padding:'10px', color : 'white'}}>Todo App</h1> 
             
             {/* Inline & external CSS style using className Example  */}
            <div style={cardStyle} className="card-style">
                <h3>{todoTitle}</h3>
                <p>{todoDesc}</p>
                <p>{date}</p>
            </div>            
        </div>
    )
}
