import React, { useState, useEffect } from "react";
import axios from "axios";

const EditUserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);

  // Fetch userId from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const userId = parsedUser ? parsedUser.userId : null;

    console.log("Stored userId:", userId);
    if (userId) {
      setUserId(userId);
    } else {
      setError("User ID is not found. Please log in again.");
      setLoading(false); // Stop loading since we can't proceed without userId
    }
  }, []);

  // Fetch user data from API when userId is set
  useEffect(() => {
    if (!userId) return; // If userId is not available, don't fetch data

    const fetchUserData = async () => {
      try {
        const response = await axios.post("http://localhost/react/getCurrentUser.php", { userId });
        if (response.data.status === "success") {
          setUserData(response.data.user);
          setName(response.data.user.name);
          setEmail(response.data.user.email);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handle form submission to update user profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage("User ID is not available. Please log in again.");
      return;
    }

    try {
      const response = await axios.post("http://localhost/react/editUserProfile.php", {
        name: name,
        email: email,
        password: password,
        userId: userId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status === "success") {
        setMessage("Profile updated successfully!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      setMessage("An error occurred while updating the user profile.");
    }
  };

  // Render loading, error, or user data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="section-padding float-start w-100">
      <div className="container">
      <div className="row">
        <div className="col-md-6 col-12 offset-md-3 gray-border">
        <h2 className="contact-title fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black ms-2">Edit User Profile</h2>
        {userData ? (
           <form onSubmit={handleSubmit}>
           <div className="row">
             <div className="form-group col-12 mb-md-4 mb-2">
               <label htmlFor="name">Name</label>
               <input
                 type="text"
                 id="name"
                 className="input-wrap form-control rounded-0 bg-transparent"
                 placeholder="Name"
                 required
                 value={name}
                 onChange={(e) => setName(e.target.value)}
               />
             </div>
             <div className="form-group col-12 mb-md-4 mb-2">
               <label htmlFor="email">Email</label>
               <input
                 type="email"
                 id="email"
                 className="input-wrap form-control rounded-0 bg-transparent"
                 placeholder="Email"
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
             </div>
             <div className="form-group col-12 mb-md-4 mb-2">
               <label htmlFor="password">Password</label>
               <input
                 type="password"
                 id="password"
                 className="input-wrap form-control rounded-0 bg-transparent"
                 placeholder="Password"
                 required
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
             </div>
             <div className="col-12 mb-md-4 mb-2 mx-auto w-full">
               <button type="submit" className="btn-orange">
                 Update Profile
               </button>
             </div>
           </div>
         </form>
       
        ):(
          <p>No user data available.</p>
        )}
        
        {message && <div className={`alert ${message.includes("successfully") ? "alert-success" : "alert-info"}`}>{message}</div>}
        </div>
      </div>
       
      </div>
    </div>
  );
};

export default EditUserProfile;
