import React, { useEffect, useState } from "react";
import axios from "axios";
// import ContactForm from "../ContactForm";
//import AddProperty from "./AddProperty";
import AddProperty from "./AddProperty";
import ChangePassword from "./ChangePassword";
import DashboardData from "./DashboardData";
import GetBookProperty from "./GetBookProperty";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/react/property.php") // Replace with your actual API URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log any errors
        setError(error);
      });
  }, []);
  // delete property
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      axios
        .get(`http://localhost/react/deleteProperty.php?id=${id}`)
        .then((response) => {
          if (response.data.success) {
            alert("Property deleted successfully.");
            // Update the properties list by filtering out the deleted property
            setProperties(properties.filter((property) => property.id !== id));
          } else {
            alert("Error deleting property: " + response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting property:", error);
          alert("Failed to delete property. Please try again.");
        });
    }
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div class="d-flex align-items-start">
          <div
            class="dashboard-tab-main nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active d-flex justify-content-between"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#5C727D"
                height={15}
                width={15}
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </button>
            <button
              class="nav-link d-flex justify-content-between"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#5C727D"
                height={15}
                width={15}
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </button>
            <button
              class="nav-link d-flex justify-content-between"
              id="v-pills-myproperties-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-myproperties"
              type="button"
              role="tab"
              aria-controls="v-pills-myproperties"
              aria-selected="false"
            >
              My Properties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#5C727D"
                height={15}
                width={15}
                viewBox="0 0 512 512"
              >
                <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
              </svg>
            </button>
            <button
              class="nav-link d-flex justify-content-between"
              id="v-pills-addproperties-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-addproperties"
              type="button"
              role="tab"
              aria-controls="v-pills-addproperties"
              aria-selected="false"
            >
              Add Properties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#5C727D"
                height={15}
                width={15}
                viewBox="0 0 576 512"
              >
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
            </button>
            <button
              class="nav-link d-flex justify-content-between"
              id="v-pills-changepspassword-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-changepspassword"
              type="button"
              role="tab"
              aria-controls="v-pills-changepspassword"
              aria-selected="false"
            >
              Change password
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#5C727D"
                height={15}
                width={15}
                viewBox="0 0 448 512"
              >
                <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
              </svg>
            </button>
            <button
              class="nav-link d-flex justify-content-between"
              id="v-pills-bookProperty-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-bookProperty"
              type="button"
              role="tab"
              aria-controls="v-pills-bookProperty"
              aria-selected="false"
            >
              BookedProperty
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#5C727D"
                height={15}
                width={15}
                viewBox="0 0 512 512"
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            {/* dashboard content */}
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
             
              <div class="w-100">
                <DashboardData />
              </div>
            </div>
            {/* profile content */}
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
             <div class="author-info gray-border p-md-4 p-3 mb-md-4 mb-2 mx-auto w-100">
                    <h6 className="fs-18 text-center fw-bold Poppins text-capitalize pb-md-2 text-orange">Agent of Property</h6>
                    <h2 className="fs-22 text-center fw-bold Poppins text-capitalize pb-md-2 text-black">tina savaliya</h2>
                    <div class="profile-info">
                        <ul class="ps-0">
                          <li><div class="d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#071c1f" height="16" width="16"><path d="M156.268 195.559C173.109 197.262 189.545 187.42 195.857 171.576L227.574 92.334C234.354 74.945 227.824 55.213 212.074 45.447L148.893 5.951C133.613 -3.658 114.021 -1.471 101.178 11.342C35.934 76.586 0 163.469 0 255.992C0 348.514 35.934 435.381 101.178 500.625C108.678 508.125 118.521 512 128.426 512C135.457 512 142.549 510.062 148.861 506.062L212.105 466.535C227.918 456.66 234.385 436.943 227.48 419.57L195.889 340.578C189.576 324.578 173.141 314.611 156.268 316.518L119.334 320.174C107.553 278.381 107.553 233.682 119.334 191.887L156.268 195.559ZM92.773 342.547C95.211 349.607 102.24 354.295 109.521 353.295L159.58 348.326C161.955 347.951 165.078 349.701 166.172 352.389L197.764 431.412C198.92 434.318 197.795 437.756 195.17 439.412L131.863 478.971C129.301 480.533 126.02 480.252 123.801 478.002C64.588 418.789 31.998 339.953 31.998 255.992C31.998 172.014 64.588 93.162 123.801 33.98C125.082 32.684 126.738 32.012 128.395 32.012C129.582 32.012 130.77 32.355 131.895 33.043L195.17 72.602C197.857 74.273 198.951 77.695 197.826 80.602L166.172 159.703C165.172 162.156 162.768 163.75 160.143 163.75C159.893 163.766 159.518 163.734 159.455 163.719L109.521 158.766C101.771 158.156 95.211 162.484 92.773 169.516C73.744 225.307 73.744 286.754 92.773 342.547ZM401.656 35.203C394.562 29.953 384.531 31.328 379.25 38.391C373.938 45.453 375.344 55.484 382.406 60.797C444.438 107.39ju1 480 178.547 480 256C480 333.469 444.438 404.594 382.406 451.219C375.344 456.531 373.938 466.562 379.25 473.625C382.375 477.781 387.188 480 392.031 480C395.375 480 398.75 478.969 401.656 476.781C471.781 424.094 512 343.625 512 256C512 168.391 471.781 87.906 401.656 35.203ZM333.188 98.812C325.875 93.812 315.938 95.672 310.938 102.937C305.938 110.234 307.781 120.187 315.062 125.187C358.219 154.828 384 203.719 384 256C384 308.25 358.219 357.156 315.062 386.812C307.781 391.812 305.938 401.781 310.938 409.062C314.031 413.562 319.031 416 324.125 416C327.25 416 330.406 415.094 333.187 413.188C385.031 377.562 416 318.812 416 256C416 193.172 385.031 134.406 333.188 98.812ZM272.094 177.75C264.219 173.797 254.625 176.828 250.562 184.719C246.531 192.578 249.656 202.219 257.531 206.25C276.312 215.859 288 234.922 288 256C288 277.094 276.312 296.156 257.531 305.75C249.656 309.781 246.531 319.406 250.563 327.281C253.406 332.812 259 336 264.812 336C267.281 336 269.75 335.438 272.094 334.25C301.656 319.156 320 289.188 320 256C320 222.844 301.656 192.859 272.094 177.75Z"></path></svg><span><a href="#"><p class="text-gray  fw-normal font-nunito fs-16 text-center ms-2 mb-0">Brooklyn, New York, United States</p></a></span></div></li><li><div class="d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#071c1f" height="16" width="16"><path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z"></path></svg><span class="text-gray  fw-normal font-nunito fs-16 text-start ms-2"><a href="tel:+0123-456789" class="text-gray text-center fw-normal font-nunito fs-16">+0123-456789</a></span></div></li><li><div class="d-flex justify-content-center align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#071c1f" height="16" width="16"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"></path></svg><span class="text-gray text-center fw-normal font-nunito fs-16 ms-2"><a href="mailto:example@example.com" class="text-gray text-center  fw-normal font-nunito fs-16">tinadiv3@gmail.com</a></span></div></li><li class="mt-md-3 mt-2"><div class="d-flex align-items-center justify-content-start social-icon">
                          </div></li></ul>
                    </div>
                </div>
              {/* <ContactForm /> */}
            </div>
            {/* my property content */}
            <div
              class="tab-pane fade"
              id="v-pills-myproperties"
              role="tabpanel"
              aria-labelledby="v-pills-myproperties-tab"
              tabindex="0"
            >
              <table class="myproperty">
                <thead className="gray-b-border">
                  <tr>
                    <th scope="col">My Properties</th>
                    <th scope="col"></th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Actions</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((property, index) => (
                      <tr key={index} className="gray-b-border">
                        <td class="ltn__my-properties-img">
                          <a href="/propertyDetail">
                            <div className="myproperty-img my-md-3 my-2">
                              <img src={property.image} alt={property.title} />
                            </div>
                          </a>
                        </td>
                        <td>
                          <div className="property-description">
                            <h3 className="productlist-title">
                              <a
                                href="/property-detail"
                                className="fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange"
                              >
                                {property.name}
                              </a>
                            </h3>
                            <div className="product-img-location">
                              <ul>
                                <li className="d-flex align-items-center">
                                  <div className="loation-icon me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512"
                                      fill="#ff5a3c"
                                      height="14"
                                      width="14"
                                    >
                                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                                    </svg>
                                  </div>

                                  <a
                                    href="/location"
                                    className="text-start fw-normal font-nunito text-capitalize fs-16 text-lightGray"
                                  >
                                    {" "}
                                    {property.location}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="text-start fw-normal font-nunito text-capitalize fs-16 text-lightGray">
                          {property.created_at}{" "}
                        </td>
                        <td>
                          <a
                            href={`/editProperty?id=${property.id}`} // Use template literals here
                            className="text-start fw-normal font-nunito text-capitalize fs-16 text-lightGray text-hover-orange"
                          >
                            Edit
                          </a>
                        </td>
                        {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              fill="#000"
                              height={16}
                              width={16}
                            >
                              <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg> */}
                        <td>
                          <a href="#" onClick={() => handleDelete(property.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000"
                            height={20}
                            width={20} viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                          </a>
                          {/* <button type="button" >
                         
                          </button> */}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div>No data available</div>
                  )}
                </tbody>
              </table>
            </div>
            {/* add property */}
            <div
              class="tab-pane fade"
              id="v-pills-addproperties"
              role="tabpanel"
              aria-labelledby="v-pills-addproperties-tab"
              tabindex="0"
            >
              <AddProperty />
            </div>
            {/* change pasword */}
            <div
              class="tab-pane fade"
              id="v-pills-changepspassword"
              role="tabpanel"
              aria-labelledby="v-pills-changepspassword-tab"
              tabindex="0"
            >
              {" "}
              <ChangePassword />
            </div>
            {/* bookProperty */}
            <div
              class="tab-pane fade"
              id="v-pills-bookProperty"
              role="tabpanel"
              aria-labelledby="v-pills-bookProperty-tab"
              tabindex="0"
            >
              <GetBookProperty className="pt-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
