import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [property, setProperty] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    image: null,
    category:""
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

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
    if (!property.size) newErrors.size = "size is required.";
    if (!property.bed) newErrors.bed = "bed is required.";
    if (!property.rooms) newErrors.rooms = "rooms is required.";
    if (!property.build) newErrors.build = "build is required.";
    if (!property.bath) newErrors.bath = "bath is required.";
    if (!property.category) newErrors.category = "category is required.";

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
    // formData.append("id", property.id);
    formData.append("name", property.name);
    formData.append("description", property.description);
    formData.append("price", property.price);
    formData.append("location", property.location);
    formData.append("size", property.size);
    formData.append("bed", property.bed);
    formData.append("rooms", property.rooms);
    formData.append("build", property.build);
    formData.append("bath", property.bath);
    formData.append("category", property.category);
    if (property.image) {
      formData.append("image", property.image);
    }

    axios
      .post("http://localhost/react/addProperty.php", formData)
      .then((response) => {
        if (response.data.success) {
          setMessage("Your property has been added successfully.");
        } else {
          setMessage("Failed to add property: " + response.data.message);
        }
      })
      .catch((error) => console.error("Error adding property:", error));
  };

  return (
    <div className="section-padding float-start w-100 pt-0">
      <div className="container">
        <h3 className="contact-title ps-2 fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black">
        Add Property
        </h3>
        <form onSubmit={handleSubmit} id="contact-form">
          {message && <p className="alert alert-info">{message}</p>}
          <div className="row">
            {/* Form fields for editing property */}
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
             title
            </h6>
            <div className="col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="name"
                value={property.name}
                onChange={handleChange}
                placeholder="*Title (mandatory)"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.name ? "is-invalid" : ""
                }`}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
              Property Description
            </h6>
            <div className="col-12 mb-md-4 mb-2">
              <textarea
                rows={5}
                cols={12}
                name="description"
                value={property.description}
                onChange={handleChange}
                placeholder="Description"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
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
                className={`input-wrap form-control  rounded-0 bg-transparent ${
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
                className="input-wrap form-control  rounded-0 bg-transparent"
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
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.location ? "is-invalid" : ""
                }`}
              />
              {errors.location && (
                <p className="text-danger">{errors.location}</p>
              )}
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
             size
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="size"
                value={property.size}
                onChange={handleChange}
                placeholder="Size"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.location ? "is-invalid" : ""
                }`}
              />
              {errors.size && (
                <p className="text-danger">{errors.size}</p>
              )}
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
             rooms
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="rooms"
                value={property.rooms}
                onChange={handleChange}
                placeholder="rooms"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.rooms ? "is-invalid" : ""
                }`}
              />
              {errors.rooms && (
                <p className="text-danger">{errors.rooms}</p>
              )}
            </div>

            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
            bed
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="bed"
                value={property.bed}
                onChange={handleChange}
                placeholder="bed"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.bed ? "is-invalid" : ""
                }`}
              />
              {errors.bed && (
                <p className="text-danger">{errors.bed}</p>
              )}
            </div>

            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
            build
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="build"
                value={property.build}
                onChange={handleChange}
                placeholder="build"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.build ? "is-invalid" : ""
                }`}
              />
              {errors.build && (
                <p className="text-danger">{errors.build}</p>
              )}
            </div>

            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
            bath
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="bath"
                value={property.bath}
                onChange={handleChange}
                placeholder="bath"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.bath ? "is-invalid" : ""
                }`}
              />
              {errors.bath && (
                <p className="text-danger">{errors.bath}</p>
              )}
            </div>
            <h6 className="fs-16 text-start fw-bold Poppins text-capitalize pb-md-2 text-black text-hover-orange">
            category
            </h6>
            <div className="col-md-6 col-12 mb-md-4 mb-2">
              <input
                type="text"
                name="category"
                value={property.category}
                onChange={handleChange}
                placeholder="category"
                className={`input-wrap form-control  rounded-0 bg-transparent ${
                  errors.category ? "is-invalid" : ""
                }`}
              />
              {errors.category && (
                <p className="text-danger">{errors.category}</p>
              )}
            </div>
            <div className="col-12 mb-md-4 mb-2">
              <div className="orange-main d-flex align-items-center justify-content-start mt-md-4 mt-3">
                <button type="submit" className="btn-orange lg">
                  add Property
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
