import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/auth'; // Import loginUser action

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if the user is already logged in and has admin role
  //   const storedRole = localStorage.getItem('role');
  //   if (storedRole && JSON.parse(storedRole) === 'admin') {
  //     navigate("/admin"); // Redirect to admin page if the user is an admin
  //   }
  // }, [navigate]);
 
  useEffect(() => {
    const storedRole = JSON.parse(localStorage.getItem('role'));
    if (storedRole) {
      // Redirect based on user role
      if (storedRole === 'admin') {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Dispatch the loginUser action with email and password
      const response = await dispatch(loginUser(email, password));
  
      if (response && response.success) {
        // Save the role in localStorage
        localStorage.setItem('role', JSON.stringify(response.role));
  
        // Navigate based on user role
        if (response.role === 'admin') {
          navigate("/admin");
        } else {
          navigate("/"); // Home for non-admin users
        }
      } else {
        setMessage('Login failed: ' + (response ? response.message : 'Unknown error'));
      }
    } catch (error) {
      // Set an error message if the login fails
      setMessage('Error: ' + (error.message || 'Login failed.'));
    }
  };

  return (
    <div className="login-wrapper float-start w-100">
      <div className="container">
        <h1 className="text-center fw-bold Poppins text-capitalize title-padding fs-45 text-black">
          Sign In <span className="d-lg-block d-inline">To Your Account</span>
        </h1>
        <p className="text-center fw-normal Poppins text-capitalize title-padding pt-0 fs-16 text-lightGray ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <span className='d-md-block'> Sit aliquid, Non distinctio vel iste.</span>
        </p>
        {/* Login Form */}
        <div className="row">
          <div className="col-md-6 col-12 p-md-5 p-3">
            <div className="login-form">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <div className="mb-md-3 mb-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="input-wrap form-control rounded-0 bg-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-md-3 mb-2">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      className="input-wrap form-control rounded-0 bg-transparent"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="orange-main mt-md-4 mt-3 mb-3">
                    <button
                      type="submit"
                      className="btn-orange text-uppercase border-0 light-shadow px-4"
                      name="login"
                    >
                      Sign In
                    </button>
                  </div>
                  <div>
                    <NavLink
                      to="/changePassword"
                      className="fs-16 text-uppercase font-nunito text-start text-lightGray fw-normal forget-password"
                    >
                      FORGOTTEN YOUR PASSWORD?
                    </NavLink>
                  </div>
                  {message && (
                    <div className="alert alert-info mt-3">{message}</div>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="login-form">
              <h6 className="text-center fw-bold Poppins text-capitalize title-padding fs-22 text-black">
                DON'T HAVE AN ACCOUNT?
              </h6>
              <p className="text-center fw-normal Poppins text-capitalize fs-14 text-lightGray ">
                Add items to your wishlist, get personalized recommendations
                <span className='d-md-block'> check out more quickly, track your orders, register</span>
              </p>
              {/* Register Prompt */}
              <div className="orange-main d-flex align-items-center justify-content-center mt-md-4 mt-3">
                <NavLink
                  to="/register"
                  className="btn-orange text-uppercase btn-large"
                >
                  Create Account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
