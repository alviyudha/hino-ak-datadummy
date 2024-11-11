import React from 'react';
import { v300115LDSTD } from '../assets/images/importImages';
import { models300, models500, models700, modelsBus } from '../assets/js/DataHino';
import { useParams } from 'react-router-dom';

export default function VehiclesDetComp() {
  let { modelName } = useParams();
  const vehicleData = [
    {
      type: "All",
      models: [
        ...models300.models,
        ...models500.models,
        ...models700.models,
        ...modelsBus.models,
      ],
    },
    {
      type: "300",
      models: [...models300.models],
    },
    {
      type: "500",
      models: [...models500.models],
    },
    {
      type: "700",
      models: [...models700.models],
    },
    {
      type: "BUS",
      models: [...modelsBus.models],
    },
  ];

  // Temukan objek model dengan name 'ZS4141 - Euro4' di dalam kategori "All"
  const targetModel = vehicleData.find(item => item.type === "All").models.find(model => model.link === modelName);

  // Ambil nilai category dari model tersebut
  const getData = targetModel ? targetModel.getData : '';

  return (
    <div id='detailVehicles' className='shadow-lg mt-5'>
      <div className="container">
        <div className="row align-items-center ps-2 pe-2">
          <div className="col-md-3 text-start mb-5">
            <p className='text-secondary'>{targetModel?.model}</p>
            <h3 className='fw-bold'>{targetModel?.name}</h3>
          </div>
          <div className="col-md-6 mb-5 text-center position-relative">
            <div></div>
            <img src={targetModel?.image} alt="" className="img-fluid" style={{ height: "292px", width: "426px", zIndex: 1 }} />
          </div>
          <div className="col-md-3 mt-3 mb-3">
            {/* Disesuaikan dengan kebutuhan Anda */}
            <p className='text-secondary'>DP mulai dari</p>
            <h3 className='text-color-primary fw-bold '>20%</h3>
            <p className='text-secondary'>harga mungkin saja berubah berdasarkan wilayah</p>
            <a href={targetModel?.brochure} className='btn btn-green mt-3' download >Download Brochure</a>
          </div>
        </div>
      </div>
    </div>
  );
}
