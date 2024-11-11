/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images/importImages';
export default function NavbarBootstrap() {

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
  
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, visible]);
  return (
    <nav className={` navbar bg-white sticky-top navbar-expand-lg p-2 z-2  fw-medium ${visible ? 'shadow-custom' : 'navbar-hidden'}`}>
    <div className='container '>
     <Link className="navbar-brand " to="/">
  <img src={logo} alt="Hino-ak" className='w-25'/>
</Link>
<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item ">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/vehicles">Vehicles</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Dealer">Contact</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Booking
        </Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/booking-service">Services</Link></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
<link className="navbar-brand text-end" to="/">
{/* <img src={logoAms40x40} alt="Bootstrap" className=''/> */}
</link>
</div>
</nav>
  )
}
