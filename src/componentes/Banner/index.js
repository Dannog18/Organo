import './Banner.css'

import React from 'react'

import Header from "../../../src/assets/banner.png"

function Banner() {
    // JSX
    return (
        <header className="banner">
            <img src={Header} alt='' />
        </header>
    )
}

export default Banner