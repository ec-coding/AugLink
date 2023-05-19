import React from 'react'
import './animatedButton.css'

const AnimatedButton = (props) => {
    return (
        <a href="#" className="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h6>{props.buttonText}</h6>
        </a>
    )
}

export default AnimatedButton
