import React, { Component } from 'react'
import './style.css'

export class EVENT_HANDLING_CLASS extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             searchValue : ''
        }
    }
    

    // handleOnChange = (e) =>{
    //    console.log(e.target.value)
    // }
   

    // handleOnChange = (e) =>{
    //     this.setState({
    //         searchValue : e.target.value
    //     })
    //     console.log(this.state.searchValue)
    // }


    handleOnChange = (e) =>{
        this.setState({
            searchValue : e.target.value
        }, () => {
            console.log("Inside setState : "+this.state.searchValue)
        })
        console.log("Outside setState : "+this.state.searchValue)
    }


    handleSignUpClick = () =>{
        console.log("sign up is clicked")
    }


    render() {
        const {searchValue} = this.state
        return (
            <div>
                <input type="text" value={searchValue} onChange={this.handleOnChange}/>
                <button onClick={this.handleSignUpClick}>Sign Up</button>
                <p>{searchValue}</p>
            </div>
        )
    }
}

export default EVENT_HANDLING_CLASS
