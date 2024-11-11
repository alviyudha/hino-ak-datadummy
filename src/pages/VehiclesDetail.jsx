// VehiclesDetail.js
import React, { Suspense } from "react";
import NavbarBootstrap from "../components/NavbarBootstrap";
import Footer from "../components/Footer";
import LoadingComp from "../components/LoadingComp";
import ReactFloatingWspComp from "../components/ReactFloatingWspComp";
const VehiclesDetComp = React.lazy(() =>
  import("../components/VehiclesDetComp")
);
const AccordionSpek = React.lazy(() => import("../components/AccordionSpek"));
const InfoLengkapComp = React.lazy(() =>
  import("../components/InfoLengkapComp")
);
const KatalogImageComp = React.lazy(() =>
  import("../components/KatalogImageComp")
);

export default function VehiclesDetail() {
  return (
    <>
      <NavbarBootstrap />
      <Suspense fallback={<LoadingComp />}>
        <KatalogImageComp />
        <VehiclesDetComp />
        <div className="container shadow pt-2 mt-5 mb-5">
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 mb-5">
              <AccordionSpek />
            </div>
            <div className="col-sm-12 col-md-6">
              <InfoLengkapComp />
            </div>
          </div>
        </div>
      </Suspense>
      <ReactFloatingWspComp />
      <Footer />
    </>
  );
}
