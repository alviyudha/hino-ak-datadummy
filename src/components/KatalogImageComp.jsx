import React from 'react';
import { useParams } from 'react-router-dom';
import { vehicleData } from '../assets/js/DataHino';

export default function KatalogImageComp() {
    const { modelName } = useParams();
    
      const targetModel = vehicleData.find(item => item.models.some(model => model.link === modelName));

      // Ambil ImgKAt dari targetModel jika ada, jika tidak, berikan array kosong
      const imgKAt = targetModel ? targetModel.models.find(model => model.link === modelName).ImgKAt : [];
  
    return (
        <div className='ps-2 pe-2'>
            {imgKAt.map((img, index) => (
                <img key={index} src={img} alt="hino AK" className='img-fluid mt-2 mb-2' />
            ))}
        </div>
    );
}
