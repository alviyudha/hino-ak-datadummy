import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlickCarouselComp from './SlickCarouselComp';
import { models300, models500, models700, modelsBus } from '../assets/js/DataHino';
import Loading1Comp from './Loading1Comp';

export default function TabProdukComp() {
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div id="tabProduct" data-aos="zoom-out-right" data-aos-duration="1000" >
      <Tabs
        defaultActiveKey="Electrified"
        id="fill-tab-example"
        className="mb-3 mt-5 container"
        fill
        onSelect={handleTabChange}
      >
        <Tab eventKey="Electrified" title="HINO 300" >
          {isLoading ? ( 
           <Loading1Comp />
          ) : (
            <SlickCarouselComp getDatatypeProf={models300.models} />
          )}
        </Tab>
        <Tab eventKey="SUV" title="HINO 500">
          {isLoading ? ( 
             <Loading1Comp />
          ) : (
            <SlickCarouselComp getDatatypeProf={models500.models} />
          )}
        </Tab>
        <Tab eventKey="MPV" title="HINO 700">
          {isLoading ? ( 
             <Loading1Comp />
          ) : (
            <SlickCarouselComp getDatatypeProf={models700.models} />
          )}
        </Tab>
        <Tab eventKey="BUS" title="HINO BUS">
          {isLoading ? ( // Tampilkan spinner jika isLoading true
             <Loading1Comp />
          ) : (
            <SlickCarouselComp getDatatypeProf={modelsBus.models} />
          )}
        </Tab>
      </Tabs>
    </div>
  );
}
