import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

const AboutSingleProperty = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(""); 
  const location = useLocation();

  // Form state for booking, now including propertyId
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    startDate: "",
    endDate: "",
    propertyId: "" // Added propertyId to formData
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve the token from localStorage or another secure place
    const token = localStorage.getItem('token');
    
    // Log the token to check if it exists
    console.log("Token:", token);
  
    if (!token) {
      setMessage("Token is missing");
      return;
    }
  
    fetch("http://localhost/react/bookSuccess.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Corrected format for Authorization header
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setMessage(data.error); // Show error message
      } else {
        setMessage(data.message || "Booking successful!"); // Show success message
        setFormData({ name: "", email: "",phone: "", message: "", startDate: "", endDate: "" }); // Clear form data
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      setMessage("An error occurred while submitting the form.");
    });
  };
  

  useEffect(() => {
    // Extract query parameters
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    if (id) {
      axios
        .get(`http://localhost/react/singlePropertyDetail.php?id=${id}`)
        .then((response) => {
          setData(response.data);
          // Update formData with the property ID
          setFormData((prevData) => ({
            ...prevData,
            propertyId: response.data.id, // Set the propertyId in formData
          }));
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setError(error);
        });
    }
  }, [location.search]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading....</div>;
  }

  return (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              className="mb-md-4 mb-3"
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <img src='./downtownOffice.jpg' alt="Slide 1" className="siglepropertyimg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./cityCondos.jpg' alt="Slide 2" className="siglepropertyimg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./IndustrialWarehouse.jpg' alt="Slide 3" className="siglepropertyimg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./luxuryVilla.jpg' alt="Slide 3" className="siglepropertyimg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./news-business.jpg' alt="Slide 3" className="siglepropertyimg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./mainStreetRetail.jpg' alt="Slide 3" className="siglepropertyimg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src='./sunnyApartments.jpg' alt="Slide 3" className="siglepropertyimg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-8 col-12">
            {/* Property Meta Section */}
            <div className="rentblog">
              <ul className='d-flex align-items-center'>
                <li className='blogCategory'>
                  <span className="text-center fw-semibold font-nunito text-uppercase fs-16 text-white mb-lg-4 mb-2 bg-orange px-md-3 px-2 py-2">Featured</span>
                </li>
                <li className='blogCategory'>
                  <span className="text-center fw-semibold font-nunito text-uppercase fs-16 text-white mb-lg-4 mb-2 bg-yellow px-md-3 px-2 py-2">For Rent</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="productlist-title">
                <a href="/propertyDetail" className="fs-45 text-start fw-bold Poppins text-capitalize title-padding text-black text-hover-orange">{data.name}</a>
              </h3>
              <div className="product-img-location">
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="loation-icon me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ff5a3c" height="14" width="14">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                      </svg>
                    </div>
                    <a href="location.jsx" className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray text-hover-orange">{data.location}</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Property Description */}
            <h3 className="contact-title ps-2 fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black">Description</h3>
            <p className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray mb-lg-4 mb-2">
            Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt. </p>
            <p className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray mb-lg-4 mb-2">
            To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.
            Property Detail </p>
         

            {/* Property Details */}
            <h3 class="contact-title ps-2 fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black">Property Detail</h3>
            <div className="property-detail-info-list d-flex align-items-center mb-lg-5 mb-4">
              <ul>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Property ID:</label> <span className="text-black fs-18">{data.id}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Home Area:</label> <span className="text-black fs-18">{data.size}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Rooms:</label> <span className="text-black fs-18">{data.rooms}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Baths:</label> <span className="text-black fs-18">{data.bath}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Year built:</label> <span className="text-black fs-18">{data.build}</span></li>
              </ul>
              <ul>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Lot Area:</label> <span className="text-black fs-18">{data.size}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Lot dimensions:</label> <span className="text-black fs-18">{data.size}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Beds:</label> <span className="text-black fs-18">{data.bed}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Price:</label> <span className="text-black fs-18">{data.price}</span></li>
                <li><label className="text-start fw-semibold font-nunito text-capitalize fs-16 text-lightGray">Property Status:</label> <span className="text-black fs-18">For Sale</span></li>
              </ul>
            </div>
              {/* Location Section */}
              <h3 className="contact-title ps-2 fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black">Location</h3>
              <div className="property-details-google-map mb-60 w-full">
                <iframe
                className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509187!2d144.95373631561658!3d-37.81720997975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce740!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1576554818936!5m2!1sen!2sau"
                  allowFullScreen
                  title="Google Map"
                ></iframe>
              </div>
          
           
          </div>

          {/* Contact Form */}
          <div className="col-md-4 col-12">
            
        {/* Display success or error message */}
        {message && <div className="alert alert-success message">{message}</div>}
            <div className="get-in-touch contact-form gray-border px-3">
              <h3 className="contact-title fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black ms-2">Drop Messege For Book</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="input-wrap form-control rounded-0 bg-transparent"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="email"
                    className="input-wrap form-control rounded-0 bg-transparent"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="number"
                    className="input-wrap form-control rounded-0 bg-transparent"
                    name="phone"
                    placeholder="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                <input
                  type="date"
                  className="input-wrap form-control rounded-0 bg-transparent"
                  name="startDate"
                  placeholder="Start Date"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="date"
                  className="input-wrap form-control rounded-0 bg-transparent"
                  name="endDate"
                  placeholder="End Date"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
                <div className="form-group mb-4">
                  <textarea
                    className="input-wrap form-control rounded-0 bg-transparent"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-4 orange-main mt-md-4 mt-3 mb-3">
                  <button type="submit" className="btn-orange text-uppercase border-0 light-shadow px-4">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSingleProperty;
