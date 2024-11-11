/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function SlickCarouselComp({getDatatypeProf}) {
  const clickToZeroPosition = () =>{
    window.scrollTo(0,0);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    autoplaySpeed: 2000,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  if (getDatatypeProf.length === 3) {
    // Duplikasi gambar pertama untuk mengisi
    const duplicatedImage = { ...getDatatypeProf[0] };
    getDatatypeProf.push(duplicatedImage);
  } else if (getDatatypeProf.length === 2) {
    const duplicatedImages = [...getDatatypeProf, ...getDatatypeProf];
    getDatatypeProf.push(...duplicatedImages);
  } else if (getDatatypeProf.length === 1) {
    const duplicatedImages = [...getDatatypeProf, ...getDatatypeProf];
    getDatatypeProf.push(...duplicatedImages);
  }
  return (
    <div id='slideCars'>
      <div className="bg-color-pruduct">
        <div className="container p-5">
          <Slider {...settings}>
            {getDatatypeProf.map((slide, index) => (
              <div key={index}>
                <img src={slide.image} alt="" className="p-3" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-primary-custom caption-container p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <ul>
                <li><p className='text-light'>{getDatatypeProf[currentSlide].yearCar}</p></li>
                <li><p className='fs-5 text-uppercase text-light fw-medium'>{getDatatypeProf[currentSlide].name}</p></li>
                <li><p className='text-light text '>{getDatatypeProf[currentSlide].type}</p></li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li><p className='fw-medium text-white'>Harga</p></li>
                <li><p className=' text-light fw-medium'>{getDatatypeProf[currentSlide].otrPrice}</p></li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li><p className='fw-medium text-white'>{getDatatypeProf[currentSlide].headTitle1}</p></li>
                <li><p className='text-light fw-medium'>{getDatatypeProf[currentSlide].content1}</p></li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li><p className='fw-medium text-white'>{getDatatypeProf[currentSlide].headTitle2}</p></li>
                <li><p className='text-light fw-medium'>{getDatatypeProf[currentSlide].content2}</p></li>
              </ul>
            </div>
            <div className="col-md-2">
              <Link to={`vehicles/details/${getDatatypeProf[currentSlide].link}`} onClick={clickToZeroPosition}>
                <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
