import React from "react";
import quater from "../images/home_quarter.png";
const HomeContact = () => {
  return (
    <div className="home_contact-wrappper section-padding">
      <div className="cotact-main d-md-flex align-md-start align-items-center d-block w-100">
        <div className="quarter-img">
          <img src={quater} alt="home quarter" className="d-md-block d-none" />
        </div>
        <div className="about-call">
          <p className="fw-normal font-nunito fs-16 text-center text-orange">
            any question you have
          </p>
          <h2 className="text-white fw-bold Poppins text-capitalize fs-72 text-center mb-md-5 mb-3">
            897-876-987-90
          </h2>
          <div className="d-flex">
            <div className="orange-main d-flex align-items-center justify-content-center">
              <a href="tel:897-876-987-90" className="btn-orange text-uppercase">
                make a call
              </a>
            </div>
            <div className="btn-main d-flex align-items-center justify-content-center ms-md-3 ms-md-4 ms-3">
              <a href="/contact" className="btn-transparent text-uppercase">
                contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeContact;
