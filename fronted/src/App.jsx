import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserHeader from "./components/UserHeader";
import AdminHeader from './components/admin/AdminHeader.jsx';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PropertyPage from "./pages/PropertyPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import EditProperty from "./components/admin/EditProperty.jsx";
import AddProperty from "./components/admin/AddProperty.jsx";
import ChangePassword from "./components/admin/ChangePassword.jsx";
import UserProfile from './components/UserProfile.jsx';
import AdminPage from "./pages/AdminPage";
import PropertyDetail from "./pages/PropertyDetail";
import BookSuccess from "./components/admin/BookSuccess.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import GetBookProperty from './components/admin/GetBookProperty.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import TermsAndConditions from './components/TermsAndConditions.jsx';
import PrivacyAndPolicy from './components/PrivacyAndPolicy.jsx';
import EditUserProfile from './components/EditUserProfile.jsx';
import MyBookings from './components/MyBookings.jsx';
import MeasureComponent from './components/MeasureComponent.jsx';

import "./css/common.css";
import "./css/bootstrap.min.css";
import "./js/jquery.min.js";
import "./js/popper.min.js";
import "./js/bootstrap.min.js";
import "./font/Poppins.css";
import "./font/Nunito-sans.css";
import "./css/Style.css";
import GetProperty from './components/admin/GetProperty.jsx';
import GetUsers from './components/admin/GetUsers.jsx';
import GetPropertyType from './components/admin/GetPropertyType.jsx';
const App = () => { 
  // header Handle
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(JSON.parse(storedRole));
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <Router>
      {/* Conditionally render header based on the user's role */}
      {role === "admin" ? <AdminHeader /> : <UserHeader />}
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myAccount" element={<MyAccountPage />} />
        <Route path="/editProperty" element={<EditProperty />} />
        <Route path="/addProperty" element={<AddProperty />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/propertyDetail" element={<PropertyDetail />} />
        <Route path="/bookSuccess" element={<BookSuccess />} />
        <Route path="/getBookProperty" element={<GetBookProperty />} />
        <Route path="/termsAndConditions " element={<TermsAndConditions  />} />
        <Route path="/privacyAndPolicy " element={<PrivacyAndPolicy  />} />
        <Route path="/editUserProfile" element={<EditUserProfile />} />
        <Route path="/myBookings" element={<MyBookings />} />
        <Route path="/measureComponent" element={<MeasureComponent />} />
        <Route path="/getProperty" element={<GetProperty />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/getPropertyType" element={<GetPropertyType />} />

        
        
        {/* Wrap the admin route with ProtectedRoute */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;



