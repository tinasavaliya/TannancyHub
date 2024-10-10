import React from "react";
import buyHome from "../images/about-main-focus-buyHome.png";
import rentHome from "../images/about-main-focus-rentHome.png";
import sellHome from "../images/about-main-focus-sellHome.png";
const AboutMainFocus = () => {
  return (
    <div className="bg-iceGray section-padding">
      <div className="container">
        <div className="features-wrap">
          <div className="d-flex align-items-center justify-content-center">
            <span className="property-listning property page-description text-center">
              Features
            </span>
          </div>
          <h3 className="text-center fw-bold Poppins text-capitalize title-padding fs-45 text-black">
            Core Features
          </h3>
          <div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
                <div className="feature-content">
                  <div className="feature-padding">
                    <img src={buyHome} alt="buy home" className="mx-auto" />
                    <div>
                      <h6 className="fw-bold Poppins text-capitalize fs-22 text-center text-black text-hover-orange">
                        Buy a home
                      </h6>
                      <p className="fs-14 fw-normal font-nunito text-lightGray text-center">
                        over 1 million+ homes for sale available on the{" "}
                        <span className="d-lg-block d-inline">
                          {" "}
                          website, we can match you with a house you will{" "}
                          <span className="d-lg-block d-inline">
                            want to call home.
                          </span>
                        </span>
                      </p>
                      <a
                        href="/property"
                        className="fs-14 fw-semibold font-nunito text-center text-lightSky d-block text-hover-orange text-capitalize"
                      >
                        find a home
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height={16}
                          width={20}
                          fill="#8CB2B2"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
                <div className="feature-content">
                  <div className="feature-padding">
                    <img src={rentHome} alt="buy home" className="mx-auto" />
                    <div>
                      <h6 className="fw-bold Poppins text-capitalize fs-22 text-center text-black text-hover-orange">
                        Rent a home
                      </h6>
                      <p className="fs-14 fw-normal font-nunito text-lightGray text-center">
                        over 1 million+ homes for sale available on the{" "}
                        <span className="d-lg-block d-inline">
                          {" "}
                          website, we can match you with a house you will{" "}
                          <span className="d-lg-block d-inline">
                            want to call home.
                          </span>
                        </span>
                      </p>
                      <a
                        href="/property"
                        className="fs-14 fw-semibold font-nunito text-center text-lightSky d-block text-hover-orange text-capitalize"
                      >
                        find a home
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height={16}
                          width={20}
                          fill="#8CB2B2"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
                <div className="feature-content">
                  <div className="feature-padding">
                    <img src={sellHome} alt="buy home" className="mx-auto" />
                    <div>
                      <h6 className="fw-bold Poppins text-capitalize fs-22 text-center text-center text-black text-hover-orange ">
                        sell a home
                      </h6>
                      <p className="fs-14 fw-normal font-nunito text-lightGray text-center">
                        over 1 million+ homes for sale available on the{" "}
                        <span className="d-lg-block d-inline">
                          {" "}
                          website, we can match you with a house you will{" "}
                          <span className="d-lg-block d-inline">
                            want to call home.
                          </span>
                        </span>
                      </p>
                      <a
                        href="/property"
                        className="fs-14 fw-semibold font-nunito text-center text-lightSky d-block text-hover-orange text-capitalize"
                      >
                        find a home
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height={16}
                          width={20}
                          fill="#8CB2B2"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMainFocus;
