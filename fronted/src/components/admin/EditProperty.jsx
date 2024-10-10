import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const EditProperty = () => {
  // Extract the 'id' from the query parameters using 'useLocation'
  //const { search } = useLocation();

  const [searchParams] = useSearchParams(); // useSearchParams hook to get the query parameters
  const id = searchParams.get("id");
  // console.log("id:" + id);
  const [property, setProperty] = useState({
    id: id, // Initialize with extracted id or an empty string
    name: "",
    description: "",
    price: "",
    location: "",
    image: null,
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      // Fetch property details
      axios
        .get(`http://localhost/react/getPropertySingle.php?id=${id}`)
        .then((response) => {
          if (response.data) {
            setProperty(response.data);
          } else {
            console.error(
              "Error fetching property details:",
              response.data.message
            );
          }
        })
        .catch((error) =>
          console.error("Error fetching property details:", error)
        );
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      image: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!property.name) newErrors.name = "Name is required.";
    if (!property.description)
      newErrors.description = "Description is required.";
    if (!property.price) newErrors.price = "Price is required.";
    if (!property.location) newErrors.location = "Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("id", property.id);
    formData.append("name", property.name);
    formData.append("description", property.description);
    formData.append("price", property.price);
    formData.append("location", property.location);
    if (property.image) {
      formData.append("image", property.image);
    }

    axios
      .post("http://localhost/react/updateProperty.php", formData)
      .then((response) => {
        if (response.data.success) {
          setMessage("Your property has been updated successfully.");
        } else {
          setMessage("Failed to update property: " + response.data.message);
        }
      })
      .catch((error) => console.error("Error updating property:", error));
  };

  return (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div className="light-border p-md-5 p-3">
        <h3 className="contact-title ps-2 fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black">
        Edit Property
        </h3>
        <form onSubmit={handleSubmit} id="contact-form">
          {message && <p className="alert alert-info">{message}</p>}
          <div className="row">
            {/* Form fields for editing property */}
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
              Property Description
            </h6>
            <div className="col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="name"
                value={property.name}
                onChange={handleChange}
                placeholder="*Title (mandatory)"
                className={`input-wrap form-control rounded-0 bg-transparent ${
                  errors.name ? "is-invalid" : ""
                }`}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            <div className="col-12 mb-md-4 mb-2">
              <textarea
                rows={5}
                cols={12}
                name="description"
                value={property.description}
                onChange={handleChange}
                placeholder="Description"
                className={`input-wrap form-control rounded-0 bg-transparent ${
                  errors.description ? "is-invalid" : ""
                }`}
              />
              {errors.description && (
                <p className="text-danger">{errors.description}</p>
              )}
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
              Property Price
            </h6>
            <div className="col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="price"
                value={property.price}
                onChange={handleChange}
                placeholder="Price"
                className={`input-wrap form-control rounded-0 bg-transparent ${
                  errors.price ? "is-invalid" : ""
                }`}
              />
              {errors.price && <p className="text-danger">{errors.price}</p>}
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
              Listing Media
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="input-wrap form-control rounded-0 bg-transparent"
              />
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
              Listing Location
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="location"
                value={property.location}
                onChange={handleChange}
                placeholder="Address"
                className={`input-wrap form-control rounded-0 bg-transparent ${
                  errors.location ? "is-invalid" : ""
                }`}
              />
              {errors.location && (
                <p className="text-danger">{errors.location}</p>
              )}
            </div>
            <div className="col-12 mb-md-4 mb-2">
              <div className="orange-main d-flex align-items-center justify-content-start mt-md-4 mt-3">
                <button type="submit" className="btn-orange lg">
                  Submit Property
                </button>
              </div>
            </div>
          </div>
        </form>
        </div>
       
      </div>
    </div>
  );
};

export default EditProperty;
