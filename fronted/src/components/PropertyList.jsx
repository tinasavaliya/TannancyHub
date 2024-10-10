// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Sidebar from "./Sidebar";
// function PropertyList() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // const [typeId, setTypeId] = useState(null); // Set the initial value as needed
//   // const [page, setPage] = useState(1); // Set the initial page value

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost/react/property.php`,
//           {
//             params: {
//               search: searchTerm,
//               // type_id: typeId,
//               // page: page,
//               limit: 5, // Set your preferred limit here
//             },
//           }
//         );
//         setData(response.data.properties || response.data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//         setError(error);
//       }
//     };

//     fetchData();
//   }, [searchTerm]);
//   // [searchTerm, typeId, page]

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Triggers useEffect to fetch data with the new searchTerm
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div className="section-padding float-start w-100">
//       <div className="container">
//         <div className="row">
//           {/* product box */}
//           <div className="col-lg-8 col-12">
//             <form onSubmit={handleSearchSubmit}>
//               <div className="row bg-white align-items-center py-md-4 py-3 ps-md-4 ps-2 justify-content-start">
               
//                 {/* Search form */}
//                 <div className="col-12 mb-md-4 mb-2">
//                   <div className="search-propert-form">
//                     <div className="search-wrapper search">
//                       <div className="property-search-main">
//                         <div className="input-group align-items-center">
//                           <input
//                             type="text"
//                             className="border-0 mb-0 input-border-0"
//                             name="search"
//                             placeholder="Search your keyword..."
//                             value={searchTerm}
//                             onChange={handleSearchChange}
//                           />
//                           <button type="submit" className="property-search">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               viewBox="0 0 512 512"
//                               height={15}
//                               width={15}
//                               fill={"#fff"}
//                             >
//                               <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Property box */}
//                 {Array.isArray(data) && data.length > 0 ? (
//                   data.map((property, index) => (
//                     <div
//                       className="col-12 light-shadow p-md-4 p-3 mb-md-4 mb-2"
//                       key={index}
//                     >
//                       <div className="propertylist d-sm-flex d-block align-items-center">
//                         <div className="propertylist-img w-100">
//                         <a href={`/propertyDetail?id=${property.id}`}>
//                           <img
//                             src={property.image} // Correct path to image
//                             alt={property.title}
//                           /></a>
                          
//                         </div>
//                         <div className="property-description ps-md-4 ps-3 w-100">
//                           <div className="product-badge-price d-flex align-items-center justify-content-between">
//                             <div className="product-badge">
//                               <span className="text-start fw-medium font-nunito text-uppercase fs-16 text-orange">
//                                 for rent
//                               </span>
//                             </div>
//                             <div className="product-price">
//                               <p className="text-end fw-semibold font-nunito text-uppercase fs-18 text-orange">
//                                 {property.price}/
//                                 <span className="fs-16 fw-medium">day</span>
//                               </p>
//                             </div>
//                           </div>
//                           <h3 className="productlist-title">
//                             <a
//                               href="/propertyDetail"
//                               className="fs-22 text-start fw-semibold Poppins text-capitalize pb-2 text-black text-hover-orange"
//                             >
//                               {property.name}
//                             </a>
//                           </h3>
//                           <div className="product-img-location">
//                             <ul>
//                               <li className="d-flex align-items-center">
//                                 <div className="loation-icon me-2">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 384 512"
//                                     fill="#ff5a3c"
//                                     height={14}
//                                     width={14}
//                                   >
//                                     <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
//                                   </svg>
//                                 </div>
//                                 <a
//                                   href="/location"
//                                   className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray text-hover-orange"
//                                 >
//                                   {property.location}
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="product-list-item">
//                             <ul className="d-flex align-items-center">
//                               <li className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray mt-2 me-2">
//                                 <span className="fw-bold fs-14 me-1">
//                                   {property.bed}
//                                 </span>
//                                 Bed
//                               </li>
//                               <li className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray mt-2 me-2">
//                                 <span className="fw-bold fs-14 me-1">
//                                   {property.bath} 
//                                 </span>
//                                 Bath
//                               </li>
//                               <li className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray mt-2 me-2">
//                                 <span className="fw-bold fs-14 me-1">
//                                   {property.size}
//                                 </span>
//                               </li>
//                             </ul>
//                           </div>
//                           <div className="product-info-bottom">
//                             <ul className="d-flex align-items-center">
//                               <li>
//                                 <img
//                                   src="/properyAgent.jpg"
//                                   alt="agentimg"
//                                   className="agent-img"
//                                 />
//                               </li>
//                               <li>
//                                 <h6>
//                                   <a
//                                     href="/teamDetail"
//                                     className="text-start fw-bold Poppins text-capitalize fs-14 text-black text-hover-orange"
//                                   >
//                                     William Seklo
//                                   </a>
//                                 </h6>
//                                 <span className="text-start fw-medium font-nunito text-capitalize fs-12 text-lightGray">
//                                   Estate Agents
//                                 </span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div>No data available</div>
//                 )}
//               </div>
//             </form>
//           </div>
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PropertyList;
import React from "react";

function PropertyList({ properties, searchTerm, onSearchChange }) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Prevents form submission, search is handled in real-time
  };

  return (
    <div className="col-lg-8 col-12">
      <form onSubmit={handleSearchSubmit}>
        <div className="row bg-white align-items-center py-md-4 py-3 ps-md-4 ps-2 justify-content-start">
          {/* Search form */}
          <div className="col-12 mb-md-4 mb-2">
            <div className="search-propert-form">
              <div className="search-wrapper search">
                <div className="property-search-main">
                  <div className="input-group align-items-center">
                    <input
                      type="text"
                      className="border-0 mb-0 input-border-0"
                      name="search"
                      placeholder="Search your keyword..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="property-search">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height={15}
                        width={15}
                        fill={"#fff"}
                      >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Property box */}
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <div
                className="col-12 light-shadow p-md-4 p-3 mb-md-4 mb-2"
                key={index}
              >
                <div className="propertylist d-sm-flex d-block align-items-center">
                  <div className="propertylist-img w-100">
                    <a href={`/propertyDetail?id=${property.id}`}>
                      <img
                        src={property.image}
                        alt={property.title}
                      />
                    </a>
                  </div>
                  <div className="property-description ps-md-4 ps-3 w-100">
                    <div className="product-badge-price d-flex align-items-center justify-content-between">
                      <div className="product-badge">
                        <span className="text-start fw-medium font-nunito text-uppercase fs-16 text-orange">
                          for rent
                        </span>
                      </div>
                      <div className="product-price">
                        <p className="text-end fw-semibold font-nunito text-uppercase fs-18 text-orange">
                          {property.price}/
                          <span className="fs-16 fw-medium">day</span>
                        </p>
                      </div>
                    </div>
                    <h3 className="productlist-title">
                      <a
                        href={`/propertyDetail?id=${property.id}`}
                        className="fs-22 text-start fw-semibold Poppins text-capitalize pb-2 text-black text-hover-orange"
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
                              height={14}
                              width={14}
                            >
                              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                          </div>
                          <a
                            href="/location"
                            className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray text-hover-orange"
                          >
                            {property.location}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-list-item">
                      <ul className="d-flex align-items-center">
                        <li className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray mt-2 me-2">
                          <span className="fw-bold fs-14 me-1">
                            {property.bed}
                          </span>
                          Bed
                        </li>
                        <li className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray mt-2 me-2">
                          <span className="fw-bold fs-14 me-1">
                            {property.bath} 
                          </span>
                          Bath
                        </li>
                        <li className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray mt-2 me-2">
                          <span className="fw-bold fs-14 me-1">
                            {property.size}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <ul className="d-flex align-items-center">
                        <li>
                          <img
                            src="/properyAgent.jpg"
                            alt="agentimg"
                            className="agent-img"
                          />
                        </li>
                        <li>
                          <h6>
                            <a
                              href="/teamDetail"
                              className="text-start fw-bold Poppins text-capitalize fs-14 text-black text-hover-orange"
                            >
                              William Seklo
                            </a>
                          </h6>
                          <span className="text-start fw-medium font-nunito text-capitalize fs-12 text-lightGray">
                            Estate Agents
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No properties found matching your criteria</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default PropertyList;
