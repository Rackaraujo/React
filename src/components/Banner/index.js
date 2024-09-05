import React from 'react';
import './banner.css'; // Certifique-se de criar esse arquivo CSS

function Banner({ title, image, buttonText, buttonLink }) {
    return (
        <div className="banner-container">
            <div className="banner-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="banner-content">
                <a href={buttonLink} className="banner-button">{buttonText}</a>
            </div>
        </div>
    );
}

export default Banner;

