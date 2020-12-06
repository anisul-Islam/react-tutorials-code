import React, {Component} from 'react'
import './style.css'

class PROPS_DESTRUCTURING_CLASS extends Component {

    //destruturing inside function body
    
 
    render(){

        const {title, desc} = this.props
        const fullDate = new Date();
        const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();

        return (
            <div>
                <div  className="card-style">
                    {/* <h3>{this.props.title}</h3>
                    <p>{this.props.desc}</p> */}
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <p>{date}</p>
                </div>            
            </div>
        )
    }
}

export default PROPS_DESTRUCTURING_CLASS;