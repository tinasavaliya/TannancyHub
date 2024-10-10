import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState(""); // State to hold the message
  const [messageType, setMessageType] = useState(""); // State to hold the message type (error or success)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the message state before validation
    setMessage("");
    setMessageType("");

    // Validation checks
    if (name.length === 0) {
      setMessage("Please fill in the name.");
      setMessageType("error");
    } else if (email.length === 0) {
      setMessage("Please fill in the email.");
      setMessageType("error");
    } else if (password.length === 0) {
      setMessage("Please fill in the password.");
      setMessageType("error");
    } else if (role.length === 0) {
      setMessage("Please select the role.");
      setMessageType("error");
    } else {
      const url = "http://localhost/react/userRegister.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("email", email);
      fData.append("password", password);
      fData.append("role", role);

      axios
        .post(url, fData)
        .then((response) => {
          if (response.data.status === "success") {
            // Handle success response
            setName("");
            setEmail("");
            setPassword("");
            setRole("");
            setMessage("Registration successful!");
            setMessageType("success"); // Set success type
            setTimeout(() => {
              navigate("/login"); // Use navigate to move to the login page
            }, 2000); // Wait 2 seconds before redirecting
          } else {
            // Handle error response
            setMessage(response.data.message);
            setMessageType("error");
          }
        })
        .catch((error) => {
          // Handle error during API call
          setMessage("An error occurred. Please try again.");
          setMessageType("error");
        });
    }
  };

  return (
    <div className="login-wrapper float-start w-100">
      <div className="container">
        <h1 className="text-center fw-bold Poppins text-capitalize title-padding fs-45 text-black">
          Register <span className="d-lg-block d-inline">To Your Account</span>
        </h1>
        <p className="text-center fw-normal font-nunito title-padding fs-16 text-lightGray pt-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <span className="d-lg-block d-inline">
            Sit aliquid, Non distinctio vel iste.
          </span>
        </p>
        <div className="w-50 mx-auto">
          <div className="p-md-5 p-3">
            <div className="login-form">
              {/* Display message if exists */}
              {message && (
                <div
                  className={`alert ${
                    messageType === "error" ? "alert-danger" : "alert-success"
                  } text-center`}
                  role="alert"
                >
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="mb-md-3 mb-2">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="input-wrap form-control rounded-0 bg-transparent"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-md-3 mb-2">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="input-wrap form-control rounded-0 bg-transparent"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-md-3 mb-2">
                    <input
                      type="password"
                      placeholder="Password*"
                      className="input-wrap form-control rounded-0 bg-transparent"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-md-3 mb-2">
                    <select
                      className="form-select input-wrap form-control rounded-0 bg-transparent"
                      aria-label="Default select example"
                      name="role"
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select user type</option>
                      <option value="user">User</option>
                      {/* <option value="admin">Admin</option> */}
                    </select>
                  </div>
                  <div className="orange-main mt-md-4 mt-3 mb-3">
                    <button
                      type="submit"
                      className="btn-orange text-uppercase border-0 light-shadow px-4"
                      name="submit"
                      id="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
