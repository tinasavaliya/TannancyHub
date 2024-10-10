import React from "react";

const DreamHome = () => {
  return (
    <>
      <div className="call-action float-start w-100">
        <div className="container">
          <div className="d-lg-flex d-block align-items-center justify-content-center action-warp">
            <div>
              <h3 className="fs-36 text-start fw-bold font-nunito text-white mb-md-3 md-2">
                Looking for a dream home?
              </h3>
              <p className="fs-16 text-start fw-semibold font-nunito text-white">
                We can help you realize your dream of a new home
              </p>
            </div>
            <div>
              <div className="orange-main d-flex align-items-center justify-content-center mt-md-4 mt-3">
                <a href="contact" className="btn-white ">
                  Explore Properties
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="20px"
                    width="20px"
                    fill="#000"
                  >
                    <path d="M335.031 408.187C330.344 403.5 328 397.375 328 391.219S330.344 378.937 335.031 374.25L430.062 279.219H24C10.75 279.219 0 268.469 0 255.219S10.75 231.219 24 231.219H430.062L335.031 136.187C325.656 126.812 325.656 111.625 335.031 102.25S359.594 92.875 368.969 102.25L504.969 238.25C514.344 247.625 514.344 262.812 504.969 272.187L368.969 408.187C359.594 417.562 344.406 417.562 335.031 408.187Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamHome;
