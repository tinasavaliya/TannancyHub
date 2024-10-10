import React from "react";

const Breadcrumb = ({ pagetitle }) => {
  return (
    <div className="breadcrumb-area text-left bg-overlay-white-30 bg-image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__breadcrumb-inner">
              <h1 className="page-title fw-bold pb-0">{pagetitle}</h1>
              <div className="breadcrumb-list">
                <ul className="p-0">
                  <li>
                    <a href="/" className="text-lightGray">
                      <span className="secondary-color me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          height="16px"
                          width="16px"
                          fill="#ff5a3c"
                        >
                          <path d="M576 256C575.999 273.602 561.736 288 544 288H511.994V480C511.994 497.672 497.666 512 479.994 512H384.004C366.33 512 352.004 497.672 352.004 480V367.994C352.004 359.158 344.842 351.994 336.006 351.994H240.012C231.176 351.994 224.012 359.158 224.012 367.994V480C224.012 497.672 209.686 512 192.012 512H96.023C78.35 512 64.023 497.672 64.023 480V288H32C14.222 288 0.001 273.557 0 256C0 246.948 3.842 238.104 10.922 231.906L266.922 7.922C273.885 1.824 281.857 0 288 0C295.523 0 303.047 2.641 309.078 7.922L565.078 231.906C572.158 238.104 576 246.948 576 256Z "></path>
                        </svg>
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12px"
                      width="12px"
                      fill="#000"
                      viewBox="0 0 320 512"
                    >
                      <path d="M85.165 475.751C81.727 472.61 80.008 468.314 80.008 464.001C80.008 460.11 81.415 456.22 84.258 453.142L266.227 256.001L84.258 58.86C78.258 52.36 78.633 42.22 85.165 36.251C91.665 30.251 101.758 30.657 107.758 37.142L299.758 245.142C305.446 251.298 305.446 260.704 299.758 266.86L107.758 474.86C101.758 481.345 91.665 481.751 85.165 475.751Z" />
                    </svg>
                  </li>
                  <li>{pagetitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
