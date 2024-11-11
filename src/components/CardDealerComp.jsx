/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { dataContact } from '../assets/js/DataHino'

export default function CardDealerComp() {
   
  return (
    <div className="row p-5" id='CardDealer'>
        {dataContact.map ((dealer,index) => (
            <div className="col-md-4 col-sm-2 mt-3" key={index}> 
             <div className="card">
             <img src={dealer.image} className="card-img-top" alt="..."/>
             <div className="card-body text-center">
            <h5 className="card-title fw-bold text-color-primary">{dealer.name}</h5>
            <p className="card-text">{dealer.address}</p>
            </div>
             </div>
             <div className="card-footer text-center">
                {/* <a href={dealer.facebook} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="xl" /></a> */}
                <a href={dealer.instagram} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                <a href={`https://wa.me/${dealer.whatsapp}`} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="xl" /></a>
                <a href={dealer.location} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLocationDot} size="xl" /></a>
            </div>
            </div>
        ))}

     
       
        
  
  
</div>
  )
}
