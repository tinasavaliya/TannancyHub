import React, { useEffect, useState } from "react";
import axios from "axios";
import ChangePassword from "./admin/ChangePassword";
import UserProfile from "./UserProfile";
import MyBookings from "./MyBookings";

const Dashboard = () => {
  const [data, setData] = useState([]);
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
            {/* dashboard */}
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
            {/* profile */}
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
              My Booking
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
                <h2 className="admin-heading fs-30 fw-700 pb-lg-3 pb-2">User Dashboard</h2>
            <div className="row justify-content-start">
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="detail-box">
                      <a href="/myBookings"  className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">Number of bookings</a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="detail-box">
                      <a href="/editUserProfile"  className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">Update Profile</a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="detail-box">
                      <a href="/changePassword"  className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">Cahange password</a>
                    </div>
                </div>
               
              
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
            
              <UserProfile />
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
            {/*Property */}
            <div
              class="tab-pane fade"
              id="v-pills-bookProperty"
              role="tabpanel"
              aria-labelledby="v-pills-bookProperty-tab"
              tabindex="0"
            >
              <MyBookings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
