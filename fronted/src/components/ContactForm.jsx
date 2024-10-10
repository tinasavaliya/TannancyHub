import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    propertymanagement: '',
    phone: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false); // New state to track error or success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/react/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.error) {
        setResponseMessage(result.error);
        setIsError(true);  // Set error state to true
      } else {
        setResponseMessage(result.message);
        setIsError(false);  // Set error state to false (success)

        // Reset form fields after success
        setFormData({
          name: '',
          email: '',
          propertymanagement: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage("An error occurred while sending the mail.");
      setIsError(true);  // Set error state to true
    }
  };

  return (
    <div className="section-padding float-start w-100 pt-0">
      <div className="container">
        <div className="light-border p-md-5 p-3">
          <h3 className="contact-title ps-2 fs-22 text-start fw-semibold text-capitalize title-padding text-black">
            Get A Quote
          </h3>
          
          {/* This will show the response message (success or error) at the top of the form */}
          {responseMessage && (
            <p className={`alert ${isError ? "alert-danger" : "alert-success"} message`}>
              {responseMessage}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 col-12 mb-md-4 mb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input-wrap form-control rounded-0 bg-transparent"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 col-12 mb-md-4 mb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email address"
                  className="input-wrap form-control rounded-0 bg-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 col-12 mb-md-4 mb-2">
                <select
                  className="input-wrap form-select rounded-0 bg-transparent"
                  name="propertymanagement"
                  value={formData.propertymanagement}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="propertyManagement">Property Management</option>
                  <option value="mortgageService">Mortgage Service</option>
                  <option value="consultingService">Consulting Service</option>
                  <option value="homeBuying">Home Buying</option>
                  <option value="homeSelling">Home Selling</option>
                </select>
              </div>
              <div className="col-md-6 col-12 mb-md-4 mb-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="input-wrap form-control rounded-0 bg-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-md-4 mb-2">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Enter Message"
                  className="input-wrap form-control rounded-0 bg-transparent"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-md-4 mb-2">
                <button type="submit" className="btn-orange text-uppercase btn-large">
                  Get a Free Service
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
