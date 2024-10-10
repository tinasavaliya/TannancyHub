// import "../css/common.css";
// import "../font/Poppins.css";
// import "../css/bootstrap.min.css";
// import "../js/popper.min.js";
// import "../js/bootstrap.min.js";
// import "../js/jquery.min.js";
// import "../css/Style.css";

import React from "react";
import Home from "../components/Home";
import HomeProperty from "../components/HomeProperty";
import HomeFeatures from "../components/HomeFeatures.jsx";
import HomeContact from "../components/HomeContact.jsx";
import HomeFeedback from "../components/HomeFeedback.jsx";
// import MyFancybox from "../components/MyFancybox.jsx";

const HomePage = () => (
  <>
    <Home />
    <HomeProperty />
    <HomeFeatures />
    <HomeContact />
    <HomeFeedback />
  </>
);

export default HomePage;
