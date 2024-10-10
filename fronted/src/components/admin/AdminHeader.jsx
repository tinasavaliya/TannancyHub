import React, { useState, useEffect } from "react";
import { NavLink  } from "react-router-dom";
import { apiRequest } from "../../utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/authSlice';

// Custom hook for handling scroll position
const useScrollPosition = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const headerHeight = document.querySelector(".header-wrapper")?.offsetHeight || 0;
      setIsBottom(scrollValue > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isBottom;
};

// Custom component for icons
const Icon = ({ path, height, width, fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width} fill={fill}>
    <path d={path} />
  </svg>
);

// Main Header Component
const AdminHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBottom = useScrollPosition();
  const [message, setMessage] = useState('');
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest('validateToken.php', 'GET');
        console.log("response: " + response);
        if (response.success) {
          // No need to setUserData here as we're using Redux state
        } else {
          setMessage('Unauthorized: ' + response.message);
        }
      } catch (error) {
        setMessage('Error: ' + error.message);
      }
    };
    
    fetchData();
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleLogout = () => {
    dispatch(logout());
  };

  
  return (
    <header className="header">
          <div className={`header-wrapper ${isBottom ? "scrolled-to-bottom" : ""} ${isMenuOpen ? "open" : ""}`}>
      <div className="container">
        <div className="row header-main">
        <div className="col-md-3 col-12 logo ">
            <NavLink to="/" className="header-logo text-gray d-flex align-item">
            <img src="./logo.webp" alt="logo" />
              Tennancy<span className="text-orange">Hub</span>
            </NavLink>
          </div>
          <div className="col-md-2 col-12">
            <ul className="d-flex align-items-center justify-content-around">
              <li className="d-md-block d-none dropdown">
                <button
                  type="button"
                  className="light-shadow icon-menu user dropdown-toggle bg-transparent border-0 d-inline"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {isAuthenticated ? (
                    <div className="fw-normal font-nunito text-black fs-16  text-center text-capitalize d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="me-2" viewBox="0 0 448 512" height={15} width={15} fill="#ff5a3c"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>{user.name}!</div>
                  ) : (
                    <div>Please log in</div>
                  )}
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {isAuthenticated ? (
                    <>
                      <li>
                        <NavLink to="/myAccount" className="dropdown-item">
                          My Account
                        </NavLink>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="dropdown-item text-black fs-16 fw-600">
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink to="/login" className="dropdown-item">
                          Sign In
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/register" className="dropdown-item">
                          Register
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>

              <li className="d-md-none d-block ms-3">
                <div onClick={toggleMenu} className="light-shadow icon-menu">
                  <Icon
                    path="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                    height={16}
                    width={16}
                    fill="#071c1f"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </header>
  
  );
};

export default AdminHeader;
