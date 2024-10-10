import React from "react";
import About from "../components/About";
import Breadcrumb from "../components/Breadcrumb";
import AboutMainFocus from "../components/AboutMainFocus";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pagetitle="About Us" />
      <About />
      <AboutMainFocus />
    </>
  );
};

export default AboutPage;
