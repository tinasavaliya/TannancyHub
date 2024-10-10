import React, { useState, useEffect } from "react";
import axios from "axios";

const ChangePassword = ({ user }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = () => {
      // Check if user prop is passed with userId
      if (user && user.userId) {
        setUserId(user.userId);
      } else {
        // Fallback to localStorage
        //const storedUserId = localStorage.getItem('userId'); // Ensure this key matches what is set during login
            const storedUser = localStorage.getItem('user');
          const parsedUser = storedUser ? JSON.parse(storedUser) : null;
          const userId = parsedUser ? parsedUser.userId : null;
        console.log("Stored userId:", userId);
        if (userId) {
          // If stored as a string, just set it directly
          setUserId(userId); // No need to parse if it's a string
        } else {
          setMessage("User ID is not found. Please log in again.");
        }
      }
    };

    fetchUserId();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage("User ID is not available. Please log in again.");
      return;
    }

    if (newPass !== confirmPass) {
      setMessage("New passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/react/changePasswordUser.php",
        {
          old_pass: oldPass,
          new_pass: newPass,
          userId: userId
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        setMessage("Password changed successfully!");
        setOldPass("");
        setNewPass("");
        setConfirmPass("");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("An error occurred while changing password.");
    }
  };

  // Log the userId for debugging
  useEffect(() => {
    console.log("Current userId:", userId);
  }, [userId]);

  if (!userId) {
    return <div className="alert alert-danger">User ID is not available. Please log in again.</div>;
  }

  return (
    <div className="float-start w-100">
      <div className="container">
        <div className="get-in-touch contact-form gray-border px-3">
        <h2 className="contact-title fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black ms-2">Set New Password</h2>
        <form id="changePassword" className="add-post-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-12 mb-md-4 mb-2">
              <label htmlFor="oldPass">Old Password</label>
              <input
                type="password"
                id="oldPass"
                className="input-wrap form-control rounded-0 bg-transparent old_pass"
                placeholder="Old Password"
                required
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div className="form-group col-12 mb-md-4 mb-2">
              <label htmlFor="newPass">New Password</label>
              <input
                type="password"
                id="newPass"
                className="input-wrap form-control rounded-0 bg-transparent new_pass"
                placeholder="New Password"
                required
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>
            <div className="form-group col-12 mb-md-4 mb-2">
              <label htmlFor="confirmPass">Confirm New Password</label>
              <input
                type="password"
                id="confirmPass"
                className="input-wrap form-control rounded-0 bg-transparent confirm_pass"
                placeholder="Confirm New Password"
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <div className="col-12 mb-md-4 mb-2">
              <button
                type="submit"
                className="btn-orange add-new"
              >
                Change Password
              </button>
            </div>
          </div>
        </form>
        {message && <div className={`alert ${message.includes("successfully") ? "alert-success" : "alert-info"}`}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
