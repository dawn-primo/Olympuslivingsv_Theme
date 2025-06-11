import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderImage from '../shared/ImageComponent/imageRenderer';

export default function imageCarousel({ addImage }) {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <>

      <Slider {...settings}>
        {addImage.map((image, index) => (
          <div key={index} className='wow animate__animated animate__pulse'>
              <RenderImage imageField={image.image_field} />
          </div>
        ))}
      </Slider></>
  );
}