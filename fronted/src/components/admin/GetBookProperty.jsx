//     import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GetBookProperty = () => {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);

//   // Function to fetch booking data
//   const fetchBookings = async () => {
//     try {
//       const response = await fetch('http://localhost/react/getBookProperty.php');
//       const data = await response.json();

//       if (data.status === 'success') {
//         setBookings(data.data);  // Set bookings data to state
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Failed to fetch data');
//     }
//   };

//   // Function to update booking status
//   const updateBookingStatus = async (bookingId, status) => {
//     try {
//       const response = await axios.post('http://localhost/react/updateBookingStatus.php', {
//         bookingId,
//         status
//       });

//       if (response.data.status === 'success') {
//         // Refetch bookings to reflect the updated status
//         fetchBookings();
//       } else {
//         setError(response.data.message);
//       }
//     } catch (err) {
//       setError('Failed to update booking status');
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   return (
//     <div className="booking-list">
//       <h1>Bookings</h1>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <ul className="pt-md-3 pt-2">
//           {bookings.map((booking, index) => (
//             <li key={index} className="booking-item">
//               <div className="col-12 light-shadow p-md-4 p-3 mb-md-4 mb-2">
//                 <div className="propertylist d-flex align-items-center">
//                   <div className="propertylist-img bookProperty">
//                     <img src={`http://localhost/react/uploads/${booking.image}`} alt={booking.name} />
//                   </div>
//                   <div className="property-description ps-md-4 ps-3 w-100">
//                     <h3 className="productlist-title">
//                       <a
//                         href="property-detail.jsx"
//                         className="fs-22 text-start fw-semibold Poppins text-capitalize text-black text-hover-orange"
//                       >
//                         {booking.name}
//                       </a>
//                       <button
//                         type="button"
//                         className="btn btn-success"
//                         onClick={() => updateBookingStatus(booking.id, 'approved')}
//                       >
//                         Approve
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-danger"
//                         onClick={() => updateBookingStatus(booking.id, 'canceled')}
//                       >
//                         Cancel
//                       </button>
//                     </h3>
//                     <p className="text-start fw-medium font-nunito text-capitalize fs-16 text-lightGray">
//                       {booking.description}
//                     </p>
//                     <p className="text-start fw-bold font-nunito text-capitalize fs-12 text-lightGray">
//                       Start Date: <span className="fw-medium">{booking.start_date}</span>
//                     </p>
//                     <p className="text-start fw-bold font-nunito text-capitalize fs-12 text-lightGray">
//                       End Date: <span className="fw-medium">{booking.end_date}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default GetBookProperty;

import React, { useEffect, useState } from "react";
import axios from "axios";

const GetBookProperty = ({className }) => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Function to fetch booking data
  const fetchBookings = async () => {
    try {
      const response = await fetch(
        "http://localhost/react/getBookProperty.php"
      );
      const data = await response.json();

      if (data.status === "success") {
        setBookings(data.data); // Set bookings data to state
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  // Function to update booking status
  const updateBookingStatus = async (bookingId, status) => {
    try {
      if (status === "canceled") {
        // Ask for confirmation before canceling
        const confirmCancel = window.confirm(
          "Are you sure you want to cancel this booking?"
        );
        if (!confirmCancel) {
          return; // Do not proceed if not confirmed
        }
      }

      const response = await axios.post(
        "http://localhost/react/updateBookingStatus.php",
        {
          bookingId,
          status,
        }
      );

      if (response.data.status === "success") {
        setMessage(response.data.message); // Show success message
        fetchBookings(); // Refetch bookings to reflect the changes
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Failed to update booking status");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className={`section-padding float-start w-100 ${className}`} >
      <div className="container">
        <div className="booking-list">
          <h1>Bookings</h1>
          {message && <p className="alert alert-success">{message}</p>}
          {error ? (
            <p>{error}</p>
          ) : (
            <ul className="pt-md-3 pt-2">
              {bookings.map((booking, index) => (
                <li key={index} className="booking-item">
                  <div className="col-12 light-shadow p-md-4 p-3 mb-md-4 mb-2">
                    <div className="propertylist d-flex align-items-center">
                      <div className="propertylist-img bookProperty">
                        <img
                          src={`http://localhost/react/uploads/${booking.image}`}
                          alt={booking.name}
                        />
                      </div>
                      <div className="property-description ps-md-4 ps-3 w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3 className="productlist-title">
                            <a
                              href="property-detail.jsx"
                              className="fs-22 text-start fw-semibold Poppins text-capitalize text-black text-hover-orange"
                            >
                              {booking.name}
                            </a>
                          </h3>
                          <div>
                            <button
                              type="button"
                              className="btn fw-normal font-nunito text-capitalize fs-16 btn-dark me-2"
                              onClick={() =>
                                updateBookingStatus(booking.id, "approved")
                              }
                            >
                              Approve
                            </button>
                          
                            <a
                              href="#"
                              onClick={() =>
                                updateBookingStatus(booking.id, "canceled")
                              }
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="#ff0000"
                                height={20}
                                width={20} viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                            
                            </a>
                          </div>
                        </div>

                        {/* <button
                            type="button"
                            onClick={() => updateBookingStatus(booking.id, 'canceled')}
                          >
                          
                          </button> */}

                        <p className="text-start fw-medium font-nunito text-capitalize fs-16 text-lightGray">
                          {booking.description}
                        </p>
                        <p className="text-start fw-bold font-nunito text-capitalize fs-12 text-lightGray">
                          Start Date:{" "}
                          <span className="fw-medium">{booking.start_date}</span>
                        </p>
                        <p className="text-start fw-bold font-nunito text-capitalize fs-12 text-lightGray">
                          End Date:{" "}
                          <span className="fw-medium">{booking.end_date}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetBookProperty;
