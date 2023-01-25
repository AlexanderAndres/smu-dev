import * as React from "react"
import './loader.css'
import SvgLoader from "./SvgLoader"

const Loader = (props) => (
    <div className={props.show ? "LoaderContainer" : 'nondisplay'}>
        <div className="jelly-triangle">
            <div className="jelly-triangle__dot"></div>
            <div className="jelly-triangle__traveler"></div>
        </div>
        <SvgLoader/>
    </div>
)

export default Loader
