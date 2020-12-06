import React, { Component } from 'react'

export class BINDING_EVENT_HANDLER extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        this.handleCounting = this.handleCounting.bind(this)
    }
    


    handleCounting () {
        this.setState({
            count : this.state.count + 1
        })
    }


    // handleCounting  = () =>{
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }




    render() {
        return (
            <div>

                {/* <button onClick={this.handleCounting.bind(this)}>Increment</button> */} */}
               
                <button onClick={this.handleCounting}>Increment</button>
                {this.state.count}
            </div>
        )
    }
}

export default BINDING_EVENT_HANDLER
