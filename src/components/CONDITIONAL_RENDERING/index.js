import React, { Component } from 'react'
import './style.css'
import HomePage from './HomePage'
import SignUpPage from './SignUpPage'
class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
   
    
    render() {

        const {isLoggedIn} = this.state
        let element;

        /** conditional rending based on if-else */
        /*
            if(isLoggedIn){
            return <HomePage />
            }else{
                return <SignUpPage />
            }
        */

        //element variable rendering
       /*
            if(isLoggedIn){
            element =  <HomePage />
        }else{
            element =  <SignUpPage />
        }
        return (
            <div>
                {element}
            </div>
        )
       */

       //ternary operator
      element =  isLoggedIn ? <HomePage /> : <SignUpPage />
      return (
          <div>
              {element}
              {/* {isLoggedIn ? <HomePage /> : <SignUpPage />} */}

              {/* short circuit method */}
              {/* {isLoggedIn && <HomePage />} */}
          </div>
      )
    }
}

export default CONDITIONAL_RENDERING
