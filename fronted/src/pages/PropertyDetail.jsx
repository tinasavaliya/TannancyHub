import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutSingleProperty from "../components/AboutSingleProperty";


const PropertyDetail= () => {
    
  return (
    <>
      <Breadcrumb pagetitle="Property Details" />
      <AboutSingleProperty/>
    </>
  );
};

export default PropertyDetail;
