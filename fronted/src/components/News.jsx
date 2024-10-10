import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css";
const News = () => (
  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // Cleanup Fancybox bindings when the component is unmounted
    return () => {
      Fancybox.destroy();
    };
  }, []),
  (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div className="col-md-8 col-12">
          <div className="news-left-main gray-border">
            <img src="./news-blog.jpg" alt="news blog image" />
            <div className="blog-description p-lg-5 p-md-3">
              <div className="orange-main d-flex align-items-center justify-content-start">
                <a href="#" className="btn-orange sm text-uppercase">
                  real estate
                </a>
              </div>
              <h3 className="fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black text-hover-orange">
                Real estate is property consisting of land and the buildings on
                it, along with itsS
              </h3>
              <p className="text-start fw-semibold font-nunito text-capitalize fs-14 text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
              <div className="product-info-bottom">
                <ul className="d-flex align-items-center justify-content-between w-100">
                  <li className="d-flex align-items-center">
                    <img
                      src="/properyAgent.jpg"
                      alt="agentimg"
                      className="agent-img"
                    />
                    <span className="text-start fw-semibold font-nunito text-capitalize fs-14 text-lightGray text-hover-orange ms-2">
                      By Ethan
                    </span>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between svg-image">
                      <a href="#" className="text-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          height={14}
                          width={14}
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                        <span className="text-start fw-semibold font-nunito text-capitalize fs-14 text-black text-hover-orange">
                          Read more
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="left-img gray-border mt-md-5 mt-3">
            {/* <img src="./news-business.jpg" /> */}
            <div>
              <a
                className="position-relative"
                data-fancybox="gallery"
                data-caption="Video 1"
                href="https://youtu.be/6h7Kt0LMNxM?si=hci1S5eXWUgLunHc"
              >
                <img src="./news-business.jpg" alt="news business" />
                <div className="play-icon-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height={18}
                    widths={18}
                    fill="#fff"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </div>
              </a>
              <div className="blog-description p-lg-5 p-md-3">
                <div className="orange-main d-flex align-items-center justify-content-start">
                  <a href="#" className="btn-orange sm text-uppercase">
                    business
                  </a>
                </div>
                <h3 className="fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black text-hover-orange">
                  Adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore.
                </h3>
                <p className="text-start fw-semibold font-nunito text-capitalize fs-14 text-lightGray">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore
                </p>
                <div className="product-info-bottom">
                  <ul className="d-flex align-items-center justify-content-between w-100">
                    <li className="d-flex align-items-center">
                      <img
                        src="/properyAgent.jpg"
                        alt="agentimg"
                        className="agent-img"
                      />
                      <span className="text-start fw-semibold font-nunito text-capitalize fs-14 text-lightGray text-hover-orange ms-2">
                        By Ethan
                      </span>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between svg-image">
                        <a href="#" className="text-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            height={14}
                            width={14}
                          >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                          </svg>
                          <span className="text-start fw-semibold font-nunito text-capitalize fs-14 text-black text-hover-orange">
                            Read more
                          </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12"></div>
      </div>
    </div>
  )
);
export default News;
