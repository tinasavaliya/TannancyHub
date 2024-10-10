import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Admin from "../components/admin/Dashboard";

const AdminPage = () => {
  return (
    <>
      <Breadcrumb pagetitle="Admin" />
      <Admin/>
    </>
  );
};

export default AdminPage;
