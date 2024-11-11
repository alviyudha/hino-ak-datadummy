/* eslint-disable no-unused-vars */


import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { logoAKG } from '../assets/images/importImages';

export default function Footer() {
  return (
    <footer id="footer" className="footer mt-1" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
    <div className="footer-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>Office</h3>
              <p>
                Jl. KH Hasyim Ashari No 45<br/>
                Kel. Cideng, Kec. Gambir, Kota Adm. Jakarta Pusat, Dki Jakarta <br/>
              <strong>Phone: </strong>0812-4885-7822<br />
              <strong>Email: </strong> marketing_kako@hino-ak.co.id<br />
              </p>
              
            </div>
          </div>

          <div className="col-lg-5 col-md-7 footer-links">
            <h4>Our Location</h4>
           
               <ul>
                <li>Hino Sorong </li>
                <li>Hino Manokwari</li>
                <li>Hino Jayapura</li>
               </ul>
             
          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter ">
            <img src={logoAKG} alt="PT. Auto maju sentosa" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>

    <div className="footer-legal text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright">
            &copy; Copyright <strong><span>PT.Kreasi Auto Kencana</span></strong>. All Rights Reserved
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          {/* <a href="#" className="twitter"><FontAwesomeIcon icon={faSquareXTwitter} /></a> */}
          <a href="#" className="facebook"><FontAwesomeIcon icon={faSquareFacebook} /></a>
          <a href="#" className="instagram" rel="noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
        </div>
      </div>
    </div>
    
  </footer>
  )
}
