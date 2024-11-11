/* eslint-disable no-unused-vars */
import React from 'react'
import { bg1, bg2, bg3, bg4 } from '../assets/images/importImages'

export default function CarouselBootstrap() {
  return (
    <div id="carouselBootstrap" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselBootstrap" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselBootstrap" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselBootstrap" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselBootstrap" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={bg1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={bg2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={bg3} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={bg4} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselBootstrap" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselBootstrap" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
