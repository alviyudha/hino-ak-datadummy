import React from 'react';
import Slider from "react-slick";
import { v300115LDSTD } from '../assets/images/importImages';
import { models300 } from '../assets/js/DataHino';

export default function OtherVehiclesSlick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 995,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
  
    return (
      <div id='otherVehicles' className='container'>  
       <h3>KENDARAAN LAINNYA</h3>
      
        <div  className="text-center ">
           
            <Slider {...settings}>
              {models300.models.map((model,index) =>(
                 <div key={index}>
                 <figure className="figure">
                     <div className="image-circle">
                         <img src={model.image} className="figure-img img-fluid rounded" alt="..." />
                         </div>
                         <figcaption className="figure-caption  text-start fw-medium">
                          <p className='text-color-primary'><strong>harga: RP.</strong> 15.000.000</p>
                          <p>{model.name}</p>
                         </figcaption>
                     
                 </figure>
             </div>

              ))}
               
            </Slider>
        </div>
        </div>
    );
}