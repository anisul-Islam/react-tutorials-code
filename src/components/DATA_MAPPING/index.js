import React from 'react'
import Data from './data.json'
import Card from './Card'

export default function DATA_MAPPING() {

    //checking the data is imported correctly
    // console.log(Data)

    //component listing using for loop
    /*
    let items = []
    for(let x=0; x<Data.length; x++){
        items.push(<Card key={x} title={Data[x].title} desc={Data[x].desc}/>)
    }
    */

    //component mapping using map
    let items = Data.map( (item, index) => <Card key={index} title={item.title} desc={item.desc}/>)

    return (
        <div>
            {items}

            {/* we can directly do mapping inside jsx */}
            {/* {Data.map( (item, index) => <Card key={index} title={item.title} desc={item.desc}/> ) } */}
        </div>
    )
}
