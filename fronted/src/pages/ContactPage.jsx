import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import DreamHome from "../components/DreamHome";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pagetitle="Contact Us" />
      <Contact />
      <ContactForm />
      <DreamHome />
    </>
  );
};

export default ContactPage;
