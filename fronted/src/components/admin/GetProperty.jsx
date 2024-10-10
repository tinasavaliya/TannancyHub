import React, { useEffect, useState } from "react";
import axios from "axios";
const GetProperty = () => {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/react/property.php") // Replace with your actual API URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log any errors
        setError(error);
      });
  }, []);
  // delete property
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      axios
        .get(`http://localhost/react/deleteProperty.php?id=${id}`)
        .then((response) => {
          if (response.data.success) {
            alert("Property deleted successfully.");
            // Update the properties list by filtering out the deleted property
            setProperties(properties.filter((property) => property.id !== id));
          } else {
            alert("Error deleting property: " + response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error deleting property:", error);
          alert("Failed to delete property. Please try again.");
        });
    }
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div class="gray-border ">
        <table class="myproperty w-100">
                <thead className="gray-b-border">
                  <tr>
                    <th scope="col">My Properties</th>
                    <th scope="col"></th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Actions</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((property, index) => (
                      <tr key={index} className="gray-b-border">
                        <td class="ltn__my-properties-img">
                          <a href="/propertyDetail">
                            <div className="myproperty-img my-md-3 my-2">
                              <img src={property.image} alt={property.title} />
                            </div>
                          </a>
                        </td>
                        <td>
                          <div className="property-description">
                            <h3 className="productlist-title">
                              <a
                                href="/property-detail"
                                className="fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange"
                              >
                                {property.name}
                              </a>
                            </h3>
                            <div className="product-img-location">
                              <ul>
                                <li className="d-flex align-items-center">
                                  <div className="loation-icon me-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 384 512"
                                      fill="#ff5a3c"
                                      height="14"
                                      width="14"
                                    >
                                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                                    </svg>
                                  </div>

                                  <a
                                    href="/location"
                                    className="text-start fw-normal font-nunito text-capitalize fs-16 text-lightGray"
                                  >
                                    {" "}
                                    {property.location}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="text-start fw-normal font-nunito text-capitalize fs-16 text-lightGray">
                          {property.created_at}{" "}
                        </td>
                        <td>
                          <a
                            href={`/editProperty?id=${property.id}`} // Use template literals here
                            className="text-start fw-normal font-nunito text-capitalize fs-16 text-lightGray text-hover-orange"
                          >
                            Edit
                          </a>
                        </td>
                        {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              fill="#000"
                              height={16}
                              width={16}
                            >
                              <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg> */}
                        <td>
                          <a href="#" onClick={() => handleDelete(property.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#000"
                            height={20}
                            width={20} viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                          </a>
                          {/* <button type="button" >
                         
                          </button> */}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div>No data available</div>
                  )}
                </tbody>
              </table>
        </div>
      </div>
    </div>
  );
};
export default GetProperty;