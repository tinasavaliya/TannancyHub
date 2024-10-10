import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch userId from localStorage
  useEffect(() => {
    const fetchUserId = () => {
      const storedUser = localStorage.getItem("user");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      const userId = parsedUser ? parsedUser.userId : null;

      console.log("Stored userId:", userId);
      if (userId) {
        setUserId(userId);
      } else {
        setMessage("User ID is not found. Please log in again.");
      }
    };

    fetchUserId();
  }, []);

  // Fetch user data from API
  useEffect(() => {
    if (!userId) return;

    axios
      .post("http://localhost/react/getCurrentUser.php", { userId })
      .then((response) => {
        if (response.data.status === "success") {
          setUserData(response.data.user);
        } else {
          setError(response.data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userId) {
    return <div className="alert alert-danger">User ID is not available. Please log in again.</div>;
  }

  return (
    <>
      <div className="float-start w-100">
        <div className="container">
          {userData ? (

            <div class="author-info gray-border p-md-4 p-3 mb-md-4 mb-2 mx-auto w-100">
              <div className="d-flex align-item-center justify-content-between">
              <h6 className="fs-18 text-start fw-bold Poppins text-capitalize pb-md-2 text-orange">User Profile</h6>
              <a href="/editUserProfile" >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
              </a>
              </div>
              
              <h2 className="fs-22 text-start fw-bold Poppins text-capitalize pb-md-2 text-black">{userData.name}</h2>
              
              <div class="profile-info">
                <ul class="ps-0">
                  <li>
                    <div class="d-flex justify-content-start align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#071c1f" height="16" width="16"><path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z"></path></svg><span class="text-gray  fw-normal font-nunito fs-16 text-start ms-2"><a href="tel:+0123-456789" class="text-gray text-center fw-normal font-nunito fs-16">+0123-456789</a></span></div></li><li><div class="d-flex align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#071c1f" height="16" width="16"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"></path></svg><span class="text-gray text-center fw-normal font-nunito fs-16 ms-2"><a href="mailto:example@example.com" class="text-gray text-center  fw-normal font-nunito fs-16">{userData.email}</a></span></div></li><li class="mt-md-3 mt-2"><div class="d-flex align-items-center justify-content-start social-icon">
                    </div></li></ul>
                
              </div>
            </div>
          ) : (
            <p>No user data available.</p>
          )}

          {message && <p>{message}</p>}
        </div>

      </div>
    </>


  );
};

export default UserProfile;
