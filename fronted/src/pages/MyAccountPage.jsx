import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Dashboard from "../components/Dashboard";

const MyAccountPage = () => {
  return (
    <>
      <Breadcrumb pagetitle="My Account" />
      <Dashboard />
    </>
  );
};

export default MyAccountPage;
