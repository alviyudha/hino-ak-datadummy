/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { modelSpecData } from '../assets/js/models'

export default function ModelSpecComp({specDataProps}) {

    
  return (
    <div className='bg-white text-center mt-5 p-5' id='modelSpec'>
        <h3 className='text-color-primary'>Model Specification</h3>
        

        <section className="section-custom" id="section-secvehicles">

  <div className="container">
  
    <nav>
      <div className="nav nav-tabs box-tab-secvehicles justify-content-center" id="nav-tab" role="tablist">
      <button className="nav-link nav-link-sec active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">Karoseri</button>
      <button className="nav-link nav-link-sec" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Performa</button>
      <button className="nav-link nav-link-sec" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">Model Mesin</button>
      <button className="nav-link nav-link-sec" id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4" type="button" role="tab" aria-controls="nav-4" aria-selected="false">Kopling</button>
      <button className="nav-link nav-link-sec" id="nav-5-tab" data-bs-toggle="tab" data-bs-target="#nav-5" type="button" role="tab" aria-controls="nav-5" aria-selected="false">Transmisi</button>
      <button className="nav-link nav-link-sec" id="nav-6-tab" data-bs-toggle="tab" data-bs-target="#nav-6" type="button" role="tab" aria-controls="nav-6" aria-selected="false">Kemudi</button>
      <button className="nav-link nav-link-sec" id="nav-7-tab" data-bs-toggle="tab" data-bs-target="#nav-7" type="button" role="tab" aria-controls="nav-7" aria-selected="false">Sumbu</button>
      <button className="nav-link nav-link-sec" id="nav-8-tab" data-bs-toggle="tab" data-bs-target="#nav-8" type="button" role="tab" aria-controls="nav-8" aria-selected="false">Rem</button>
      <button className="nav-link nav-link-sec" id="nav-9-tab" data-bs-toggle="tab" data-bs-target="#nav-9" type="button" role="tab" aria-controls="nav-9" aria-selected="false">Roda & Ban</button>
      <button className="nav-link nav-link-sec" id="nav-10-tab" data-bs-toggle="tab" data-bs-target="#nav-10" type="button" role="tab" aria-controls="nav-10" aria-selected="false">Sistem Listrik ACCU</button>
      <button className="nav-link nav-link-sec" id="nav-11-tab" data-bs-toggle="tab" data-bs-target="#nav-11" type="button" role="tab" aria-controls="nav-11" aria-selected="false">Tangki Solar</button>
      <button className="nav-link nav-link-sec" id="nav-12-tab" data-bs-toggle="tab" data-bs-target="#nav-12" type="button" role="tab" aria-controls="nav-12" aria-selected="false">Dimensi</button>
      <button className="nav-link nav-link-sec" id="nav-13-tab" data-bs-toggle="tab" data-bs-target="#nav-13" type="button" role="tab" aria-controls="nav-13" aria-selected="false">Suspensi</button>
      <button className="nav-link nav-link-sec" id="nav-14-tab" data-bs-toggle="tab" data-bs-target="#nav-14" type="button" role="tab" aria-controls="nav-14" aria-selected="false">Berat Chassis</button>

        
      </div>
    </nav>
    <div className="tab-content text-start mt-2 " id="nav-tabContent">

    <div className="tab-pane ps-2 fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab" >
    {/* content */}
    <div className="row p-2">
  {modelSpecData["115 SD STD - Euro4"].karoseri.map((item, index) => (
    <div className="col-md-3 col-sm-2" key={index}>
      <img src={item.img} alt="" />
    </div>
  ))}
</div>
    </div>
    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].performa.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].modelMesin.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].kopling.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].transmisi.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-6-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].kemudi.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-7" role="tabpanel" aria-labelledby="nav-7-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].sumbu.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-8" role="tabpanel" aria-labelledby="nav-8-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].rem.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-9" role="tabpanel" aria-labelledby="nav-9-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].rodaBan.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-10" role="tabpanel" aria-labelledby="nav-10-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].sisListrikACCU.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-11" role="tabpanel" aria-labelledby="nav-11-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].tangkiSolar.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-12" role="tabpanel" aria-labelledby="nav-12-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].dimensi.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-13" role="tabpanel" aria-labelledby="nav-13-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].suspensi.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="tab-pane fade" id="nav-14" role="tabpanel" aria-labelledby="nav-14-tab" >
      {/* content */}
      {modelSpecData["115 SD STD - Euro4"].beratChassis.map((item, index) => (
      <div key={index} className={`row p-2 ${index % 2 === 0 ? 'bg-body-secondary' : ''}`}>
        <div className="col-md-3 col-sm-2">
          <p><strong>{item.title}</strong></p>
        </div>
        <div className="col-md-9 col-sm-2">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
    </div>
    </div>
  </div>    
</section>

    </div>
  )
}
