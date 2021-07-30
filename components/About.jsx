import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='/' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>The old posters and signs in the traditional Montserrat neighborhood of Buenos Aires inspired Julieta Ulanovsky to design this typeface and rescue the beauty of urban typography that emerged in the first half of the twentieth century.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About 
