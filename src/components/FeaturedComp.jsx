/* eslint-disable no-unused-vars */
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FeaturedComp() {
  return (
    <div id='featured'>
    <div className='container text-center'>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-2">
          <FontAwesomeIcon icon={faShield} style={{fontSize:"42px"}} />
          <p className='fw-bold'>Jaminan Layanan Terbaik</p>
          <p>Jaminan Suku Cadang asli dari HOP & HGP untuk kendaraan Hino.</p>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <FontAwesomeIcon icon={faWrench} style={{fontSize:"42px"}} />
          <p className='fw-bold'>Perawatan & Perbaikan</p>
          <p>kendaraan anda tetap optimal dengan bengkel resmi Hino.</p>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <FontAwesomeIcon icon={faHeadset} style={{fontSize:"42px"}} />
          <p className='fw-bold'>Layanan</p>
          <p>Kami siap melayani kamu, dimanapun kamu berada.</p>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <FontAwesomeIcon icon={faTruckFast} style={{fontSize:"42px"}} />
          <p className='fw-bold'>Gratis Service</p>
          <p>Gratis service tambahan sampai dengan 100.000 Km.</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
