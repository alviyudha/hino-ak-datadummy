import React, { useState } from 'react';
import Footer from '../components/Footer';
import NavbarBootstrap from '../components/NavbarBootstrap';
import { vehicleData } from '../assets/js/DataHino';
import { Link } from 'react-router-dom';
import Loading1Comp from '../components/Loading1Comp';
import ReactFloatingWspComp from '../components/ReactFloatingWspComp';

export default function Vehicles() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Mengatur waktu loading selama 1 detik
  };

  const clickToZeroPosition = () =>{
    window.scrollTo(0,0);
  };

  const getvehicleData = vehicleData;

  return (
    <>
      <NavbarBootstrap />
      <section className="section-custom" style={{ marginTop: '30px' }} id="section-secvehicles">
        <div className="container">
          <nav>
            <div className="nav nav-tabs box-tab-secvehicles" id="nav-tab" role="tablist">
              {getvehicleData.map((vehicleType, index) => (
                <button
                  key={index}
                  className={`nav-link nav-link-sec ${index === 0 ? 'active' : ''}`}
                  id={`nav-${vehicleType.type}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${vehicleType.type}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${vehicleType.type}`}
                  aria-selected={index === 0 ? 'true' : 'false'}
                  onClick={handleTabChange} 
                >
                  {vehicleType.type}
                </button>
              ))}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {getvehicleData.map((vehicleType, index) => (
              <div
                key={index}
                className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                id={`nav-${vehicleType.type}`}
                role="tabpanel"
                aria-labelledby={`nav-${vehicleType.type}-tab`}
              >
                {isLoading ? ( 
                   <Loading1Comp />
                ) : (
                  <div className="card_vehicles justify-content-between">
                    <div className="row">
                      {vehicleType.models.map((model, modelIndex) => (
                        <div key={modelIndex} className="col-md-4 card-vehicles">
                          <Link to={`/vehicles/details/${model.link}`} className="vehicle-link" onClick={clickToZeroPosition}>
                            <img src={model.image} className="card-img-top" alt="..." />
                          </Link>
                          <div className="card-body">
                            <p className="card-text text-center vehicles-card-caption ">{model.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReactFloatingWspComp />
      <Footer />
    </>
  );
}
