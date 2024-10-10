import React, { useEffect, useState } from "react";
import axios from "axios";

const Property = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/react/property.php") // Replace with your actual API URL
      .then((response) => {
        console.log("response data:", response.data); // Log the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log any errors
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((property, index) => (
          <div className="col-12" key={index}>
            <div className="propertylist d-flex align-items-center">
              
              <div className="propertylist-img">
                <a href="/propertyDetail">
                <img src={property.image} alt={property.title} /></a>
              </div>
              <div className="property-description">
                <div className="product-badge-price d-flex align-items-center">
                  <div className="product-badge">
                    <span>for rent</span>
                  </div>
                  <div className="product-price">
                    <p>
                      {property.price} <span>day</span>
                    </p>
                  </div>
                </div>
                <h3 className="productlist-title">
                  <a href="/propertyDetail">{property.title}</a>
                </h3>
                <div className="product-img-location">
                  <ul>
                    <li>
                      <a href="/location">{property.title}</a>
                      {property.location}
                    </li>
                  </ul>
                </div>
                <div className="product-list-item">
                  <ul className="d-flex align-items-center">
                    <li>
                      <span>{property.beds}</span> Bed
                    </li>
                    <li>
                      <span>{property.baths}</span> Bath
                    </li>
                    <li>
                      <span>{property.area}</span> Square Ft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Property;
