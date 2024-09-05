import React from 'react';
import Slider from 'react-slick';
import styles from './BannerCarousel.module.css';

function BannerCarousel({ images }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={styles['banner-carousel']}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={styles['banner-slide']}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BannerCarousel;
