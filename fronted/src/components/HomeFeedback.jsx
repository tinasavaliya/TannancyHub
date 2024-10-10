import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

//images
import feedbackOne from "../images/home-feedback-one.jpg";
import feedbackTwo from "../images/home-feedback-two.jpg";
import feedbackThree from "../images/home-feedback-three.jpg";
import feedbackFour from "../images/home-feedback-four.jpg";
import oneFounder from "../images/home-feedback-one-founder.jpg";
import twoFounder from "../images/home-feedback-two-founder.jpg";
import threeFounder from "../images/home-feedback-three-founder.jpg";
import fourFounder from "../images/home-feedback-four-founder.jpg";
// import fancyboxOne from "../images/home-fancybox-one.jpg";
// import fancyboxTwo from "../images/home-fancybox-two.jpg";
// import fancyboxThree from "../images/home-fancybox-three.jpg";
// import fancyboxFour from "../images/home-fancybox-four.jpg";
// fancybox

const HomeFeedback = () => {
  return (
    <div className="home-feedback-wrappper section-padding">
      <div className="container">
        <div className="feedback-main">
          <div className="">
            <span className="property-listning property text-start font-nunito fw-normal fs-16">
              Features
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="text-start fw-bold Poppins text-capitalize title-padding fs-45 text-black">
              Core Features
            </h3>
            <div className="d-flex align-items-center orange-main">
              <div className="custom-swiper-button-next custom-navigation btn-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height={18}
                  width={18}
                  fill="#fff"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </div>
              <div className="custom-swiper-button-prev custom-navigation ms-md-3 ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height={18}
                  width={18}
                  fill="#fff"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
          >
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackOne}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={oneFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        Noah Alexander
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Professor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackOne}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={oneFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        Noah Alexander
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Professor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackOne}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={oneFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        Noah Alexander
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Professor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackTwo}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={twoFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        Ethan James
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackThree}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={threeFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        NJacob William
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Founder, Browni Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackThree}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.{" "}
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={threeFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        NJacob William
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Founder, Browni Co.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-box">
                <img
                  src={feedbackFour}
                  alt="home quarter"
                  className="d-md-block d-none feedback-img"
                />
                <div className="feedback-inner-box light-shadow">
                  <p className="fs-16 fw-normal text-lightGray text-start font-nunito">
                    Lorem ipsum ctetur elit, sed do eius mod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                  <div className="d-flex align-items-center pt-4 pt-3">
                    <img
                      src={fourFounder}
                      alt="oneFounder"
                      className="feedback-founder-img"
                    />
                    <div className="ms-md-3 ms-2">
                      <h4 className="fs-22 fw-bold text-black Poppins text-start">
                        Liam Mason
                      </h4>
                      <p className="fs-16 fw-bold text-orange text-start Poppins">
                        Officer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedback;
