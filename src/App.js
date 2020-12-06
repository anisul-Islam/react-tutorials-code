import React from 'react'
import JSX_JS_EXPRESSION from './components/JSX_JS_EXPRESSION/index'
import CSS_STYLE from './components/CSS_STYLE/index'
import CARD from './components/CARD/index'
import CLASS_COMPONENT from './components/CLASS_COMPONENT/index'
import PROPS_DESTRUCTURING_FUNCTIONAL from './components/PROPS_DESTRUCTURING_FUNCTIONAL/index'
import PROPS_DESTRUCTURING_CLASS from './components/PROPS_DESTRUCTURING_CLASS/index'
import DATA_MAPPING from './components/DATA_MAPPING/index'
import STATE_IN_CLASS from './components/STATE_IN_CLASS/index'
import CONDITIONAL_RENDERING from './components/CONDITIONAL_RENDERING/index'
import EVENT_HANDLING_CLASS from './components/EVENT_HANDLING_CLASS/index'
import EVENT_HANDLING_FUNCTION from './components/EVENT_HANDLING_FUNCTION/index'

export default function App() {

    return (
        <div>
            {/* <JSX_JS_EXPRESSION /> */}
            {/* <CSS_STYLE /> */}
            {/* <CARD /> */}
            {/* <CLASS_COMPONENT /> */}
            {/* <PROPS_DESTRUCTURING_FUNCTIONAL title="Call Family" desc="Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit"/> */}
            {/* <PROPS_DESTRUCTURING_CLASS title="Call Family" desc="Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit"/> */}
            {/* <DATA_MAPPING /> */}
            {/* <STATE_IN_CLASS /> */}
            {/* <CONDITIONAL_RENDERING /> */}
            {/* <EVENT_HANDLING_CLASS /> */}
            <EVENT_HANDLING_FUNCTION />
        </div>
    )
}
