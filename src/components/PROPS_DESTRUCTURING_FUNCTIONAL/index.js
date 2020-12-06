import React from 'react'
import './style.css'

// export default function PROPS_DESTRUCTURING(props) {

//destruturing inside function parameter
export default function PROPS_DESTRUCTURING_FUNCTIONAL({title, desc}) {


    //destruturing inside function body
    // const {title, desc} = props

    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();

    return (
        <div>
            <div  className="card-style">
                {/* <h3>{props.title}</h3>
                <p>{props.desc}</p> */}

                <h3>{title}</h3>
                <p>{desc}</p>
                <p>{date}</p>
            </div>            
        </div>
    )
}
