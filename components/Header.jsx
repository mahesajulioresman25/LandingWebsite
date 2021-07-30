import React from "react"
import Navbar from "./Navbar"

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1><span>Launch Your App</span>With Confidence And Creativity</h1>
                <p className='details'>The old posters and signs in the traditional Montserrat neighborhood of Buenos Aires inspired Julieta Ulanovsky to design this typeface and rescue the beauty of urban typography that emerged in the first half of the twentieth century.</p>
            
            <a href='#' className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header
