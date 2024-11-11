/* eslint-disable no-unused-vars */
import React from 'react';
import { bgFindDealer, mixerBus } from '../assets/images/importImages';

const backgroundStyle = {
  backgroundImage: `url(${bgFindDealer})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%', // Menetapkan tinggi latar belakang menjadi 100%
};

export default function FindDealer() {
  return (
    <div id='findDealer' style={backgroundStyle} className='mt-4'>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={mixerBus} alt="Image 1" className="img-fluid mb-4" />
          </div>
          <div className="col-md-6 text-white">
            <h5 className='mb-2'>DEALER KAMI TERSEBAR DISELURUH INDONESIA</h5>
            <p className='mb-3'>Hino-AK memberikan layanan purna jual unggulan untuk kebutuhan truk Anda. Didukung oleh dealer dan bengkel yang tersebar di Indonesia. Hino-AK siap menjadi solusi transport andal dan terpercaya bagi bisnis Anda.</p>
            <button type='button' className='btn'> Temukan Dealer Kami</button>
          </div>
        </div>
      </div>
    </div>
  );
}


