import React from 'react'

function FeatureBox(props) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image} />
            </div>
            <div className="s-b-text">
                <h2>{props.title}</h2>
                <p>The old posters and signs in the traditional Montserrat neighborhood of Buenos Aires inspired Julieta Ulanovsky to design this typeface and rescue the beauty of urban typography that emerged in the first half of the twentieth century.</p>
            </div>
        </div>
    )
}

export default FeatureBox
