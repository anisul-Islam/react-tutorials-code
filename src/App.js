import React from 'react'
import JSX_JS_EXPRESSION from './components/JSX_JS_EXPRESSION/index'
import CSS_STYLE from './components/CSS_STYLE/index'
import CARD from './components/CARD/index'
import PROPS_DESTRUCTURING_FUNCTIONAL from './components/PROPS_DESTRUCTURING_FUNCTIONAL/index'
import PROPS_DESTRUCTURING_CLASS from './components/PROPS_DESTRUCTURING_CLASS/index'

export default function App() {

    return (
        <div>
            {/* <JSX_JS_EXPRESSION /> */}
            {/* <CSS_STYLE /> */}
            {/* <CARD /> */}
            {/* <PROPS_DESTRUCTURING_FUNCTIONAL title="Call Family" desc="Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit"/> */}
            <PROPS_DESTRUCTURING_CLASS title="Call Family" desc="Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit"/>
        </div>
    )
}
