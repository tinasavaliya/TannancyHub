import React, { useEffect } from "react";
import aboutImg from "../images/about-banner.png";
import bannerVideo from "../images/abour-banner-video-image.png";
import { Fancybox } from "@fancyapps/ui";
import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
const About = () => (
  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // Cleanup Fancybox bindings when the component is unmounted
    return () => {
      Fancybox.destroy();
    };
  }, []),
  (
    <>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="left-img position-relative">
                <img src={aboutImg} />
                <div className="fancy-gallery">
                  <a
                    data-fancybox="gallery"
                    data-caption="Video 1"
                    href="https://youtu.be/6h7Kt0LMNxM?si=hci1S5eXWUgLunHc"
                  >
                    <img src={bannerVideo} alt="Thumbnail 1" />

                    <div className="play-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        height={18}
                        widths={18}
                        fill="#ff5a3c"
                      >
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex align-items-center">
                <span className="property-listning property fw-normal font-nunito fs-16">
                  About us
                </span>
              </div>
              <h3 className="text-start fw-bold Poppins text-capitalize title-padding fs-45 text-black">
                The Leading Real Estate
                <span className="  d-inline">
                  Rental Marketplace<b className="text-orange">.</b>
                </span>
              </h3>
              <p className="fs-16 fw-normal font-nunito text-lightGray text-start">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
              <div className="row">
                <div className="col-md-6 col-12 mb-md-3 mb-2">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="property-listning about">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height={18}
                        width={18}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M22 22L2 22"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M4 22V9.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M20 9.5V13.5M20 22V17.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <span className="fs-16 fw-normal font-nunito text-lightGray text-start ms-3">
                      Smart Home Design
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-md-3 mb-2">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="property-listning about">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height={18}
                        width={18}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M22 22L2 22"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M4 22V9.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M20 9.5V13.5M20 22V17.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <span className="fs-16 fw-normal font-nunito text-lightGray text-start ms-3">
                      Smart Home Design
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-md-3 mb-2">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="property-listning about">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height={18}
                        width={18}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M22 22L2 22"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M4 22V9.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M20 9.5V13.5M20 22V17.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <span className="fs-16 fw-normal font-nunito text-lightGray text-start ms-3">
                      Smart Home Design
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-md-3 mb-2">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="property-listning about">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        height={18}
                        width={18}
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M22 22L2 22"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M4 22V9.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M20 9.5V13.5M20 22V17.5"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                          <path
                            d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                            stroke="#ff5a3c"
                            stroke-width="1.5"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <span className="fs-16 fw-normal font-nunito text-lightGray text-start ms-3">
                      Smart Home Design
                    </span>
                  </div>
                </div>
                <div className="col-md-12 mb-md-3 mb-2 mx-2 property-listning property border-0 rounded-2 px-0">
                  <div className="about-pera-content">
                    <p className="fs-16 fw-normal font-nunito text-lightGray text-start ms-md-4 ms-2 mb-0 ">
                      "Enimad minim veniam quis nostrud exercitation
                      <span className="d-lg-block d-inline">
                        llamco laboris. Lorem ipsum dolor sit amet"
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="orange-main d-flex align-items-center justify-content-start mt-md-4 mt-3">
                    <a
                      className="btn-orange text-uppercase btn-large"
                      href="/services"
                    >
                      {" "}
                      OUR SERVICES
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
);

export default About;
