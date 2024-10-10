const Footer = () => {
  return (
    <div>
      <div className="footer-wrapper float-start w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
          
              <a
                href="#"
                className="text-white footer-logo mb-md-3 mb-2 d-block d-md-flex align-items-center"
              >
                <img src="./logo.webp" alt="logo" />
                Tennancy<span className="text-orange">Hub</span>
              </a>
              <div>
                <p className="text-white  fw-normal font-nunito fs-16 text-start mb-md-3 mb-2">
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry. Lorem Ipsum is dummy text of the printing.
                </p>
                <ul className="ps-0">
                  <li>
                    <div className="d-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#fff"
                        height={16}
                        width={16}
                      >
                        <path d="M156.268 195.559C173.109 197.262 189.545 187.42 195.857 171.576L227.574 92.334C234.354 74.945 227.824 55.213 212.074 45.447L148.893 5.951C133.613 -3.658 114.021 -1.471 101.178 11.342C35.934 76.586 0 163.469 0 255.992C0 348.514 35.934 435.381 101.178 500.625C108.678 508.125 118.521 512 128.426 512C135.457 512 142.549 510.062 148.861 506.062L212.105 466.535C227.918 456.66 234.385 436.943 227.48 419.57L195.889 340.578C189.576 324.578 173.141 314.611 156.268 316.518L119.334 320.174C107.553 278.381 107.553 233.682 119.334 191.887L156.268 195.559ZM92.773 342.547C95.211 349.607 102.24 354.295 109.521 353.295L159.58 348.326C161.955 347.951 165.078 349.701 166.172 352.389L197.764 431.412C198.92 434.318 197.795 437.756 195.17 439.412L131.863 478.971C129.301 480.533 126.02 480.252 123.801 478.002C64.588 418.789 31.998 339.953 31.998 255.992C31.998 172.014 64.588 93.162 123.801 33.98C125.082 32.684 126.738 32.012 128.395 32.012C129.582 32.012 130.77 32.355 131.895 33.043L195.17 72.602C197.857 74.273 198.951 77.695 197.826 80.602L166.172 159.703C165.172 162.156 162.768 163.75 160.143 163.75C159.893 163.766 159.518 163.734 159.455 163.719L109.521 158.766C101.771 158.156 95.211 162.484 92.773 169.516C73.744 225.307 73.744 286.754 92.773 342.547ZM401.656 35.203C394.562 29.953 384.531 31.328 379.25 38.391C373.938 45.453 375.344 55.484 382.406 60.797C444.438 107.391 480 178.547 480 256C480 333.469 444.438 404.594 382.406 451.219C375.344 456.531 373.938 466.562 379.25 473.625C382.375 477.781 387.188 480 392.031 480C395.375 480 398.75 478.969 401.656 476.781C471.781 424.094 512 343.625 512 256C512 168.391 471.781 87.906 401.656 35.203ZM333.188 98.812C325.875 93.812 315.938 95.672 310.938 102.937C305.938 110.234 307.781 120.187 315.062 125.187C358.219 154.828 384 203.719 384 256C384 308.25 358.219 357.156 315.062 386.812C307.781 391.812 305.938 401.781 310.938 409.062C314.031 413.562 319.031 416 324.125 416C327.25 416 330.406 415.094 333.187 413.188C385.031 377.562 416 318.812 416 256C416 193.172 385.031 134.406 333.188 98.812ZM272.094 177.75C264.219 173.797 254.625 176.828 250.562 184.719C246.531 192.578 249.656 202.219 257.531 206.25C276.312 215.859 288 234.922 288 256C288 277.094 276.312 296.156 257.531 305.75C249.656 309.781 246.531 319.406 250.563 327.281C253.406 332.812 259 336 264.812 336C267.281 336 269.75 335.438 272.094 334.25C301.656 319.156 320 289.188 320 256C320 222.844 301.656 192.859 272.094 177.75Z" />
                      </svg>

                      <span>
                        <a href="#">
                          <p className="text-white  fw-normal font-nunito fs-16 text-start ms-2 mb-0">
                            Brooklyn, New York, United States
                          </p>
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="#fff"
                        height={16}
                        width={16}
                      >
                        <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z" />
                      </svg>
                      <span className="text-white  fw-normal font-nunito fs-16 text-start ms-2">
                        <a
                          href="tel:+0123-456789"
                          className="text-white  fw-normal font-nunito fs-16 text-start"
                        >
                          +0123-456789
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex d-flex align-items-center justify-content-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#fff"
                        height={16}
                        width={16}
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                      </svg>
                      <span className="text-white  fw-normal font-nunito fs-16 text-start ms-2">
                        <a
                          href="mailto:example@example.com"
                          className="text-white  fw-normal font-nunito fs-16"
                        >
                          example@example.com
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="mt-md-3 mt-2">
                    <div className="d-flex align-items-center justify-content-start social-icon">
                      <a href="https://www.facebook.com/" target="_blank" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          fill="#fff"
                          height={18}
                          width={18}
                        >
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                      </a>
                      <a href="https://x.com/" target="_blank" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="#fff"
                          height={18}
                          width={18}
                        >
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="#fff"
                          height={18}
                          width={18}
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/" target="_blank" className="mx-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="#fff"
                          height={18}
                          width={18}
                        >
                          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 text-start">
              <h6 className="text-white text-capitalize  fw-bold font-nunito fs-22 mb-md-3 mb-2 mt-md-0 mt-sm-3 mt-2">
                Company
              </h6>
              <ul>
                <li className="mb-2 footer-description ">
                  <a
                    href="/about"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2 footer-description ">
                  <a
                    href="/property"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    All Properties
                  </a>
                </li>
                <li className="mb-2 footer-description ">
                  <a
                    href="/contact"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12 text-start">
              <h6 className="text-white text-capitalize  fw-bold font-nunito fs-22 mb-md-3 mb-2 mt-md-0 mt-sm-3 mt-2">
                Services
              </h6>
              <ul>
                <li className="mb-2 footer-description">
                  <a
                    href="/login"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    login
                  </a>
                </li>
                <li className="mb-2 footer-description">
                  <a
                    href="/myAccount"
                    className="text-white  fw-normal font-nunito fs-16 mb-2"
                  >
                    my acount
                  </a>
                </li>
                <li className="mb-2 footer-description">
                  <a
                    href="/termsConditions"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    Terms & Conditions
                  </a>
                </li>
               
                <li className="mb-2 footer-description">
                  <a
                    href="/contact"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12 text-start">
              <h6 className="text-white text-capitalize  fw-bold font-nunito fs-22 mb-md-3 mb-2 mt-md-0 mt-sm-3 mt-2">
                Coustomer Care
              </h6>
              <ul>
                <li className="mb-2 footer-description">
                  <a
                    href="/about"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    login
                  </a>
                </li>
                <li className="mb-2 footer-description">
                  <a
                    href="/blog"
                    className="text-white  fw-normal font-nunito fs-16 mb-2"
                  >
                    My account
                  </a>
                </li>
                <li className="mb-2 footer-description">
                  <a
                    href="/contact"
                    className="text-white  fw-normal font-nunito fs-16"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom float-start w-100">
        <div className="container">
          <div className="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between justify-content-center w-100">
            <span className="text-white  fw-normal font-nunito fs-16">
              All Rights Reserved @ Company 2024
            </span>
            <ul className="d-flex align-items-center justify-content-end g-1 mb-0">
              <li className="footer-descriptio  n">
                <a
                  href="/termsAndConditions"
                  className="text-white  fw-normal font-nunito fs-16 mx-2 text-capitalize"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="footer-description">
                <a
                  href="/privacyAndPolicy"
                  className="text-white  fw-normal font-nunito fs-16 mx-2 text-capitalize"
                >
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
