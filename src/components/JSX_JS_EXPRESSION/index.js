import React from 'react'

export default function JSX_JS_expression() {
    const todoTitle = "Call Family"
    const todoDesc = "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt."
    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();
    return (
        <div>
            <h1>Todo App</h1>
            <h3>{todoTitle}</h3>
            <p>{todoDesc}</p>
            <p>{date}</p>
            {/* <p>{fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear()}</p> */}
            {/* <p>{`${fullDate.getDate()}/${fullDate.getMonth()}/${fullDate.getFullYear()}`}</p> */}            
        </div>
    )
}
