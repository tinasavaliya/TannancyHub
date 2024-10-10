import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import axios from 'axios';
import apartment from "../images/home_property_apartments.jpg";
import condos from "../images/home_property_condos.jpg";
import houses from "../images/home_property_houses.jpg";
import retails from "../images/home_property_retail.jpg";
import villas from "../images/home_property_villas.jpg";
const HomeProperty = () => {
  // const location = useLocation(); // Hook to access the current location
  // const [searchResults, setSearchResults] = useState([]);

  //property types
  const [area, setArea] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyArea = async () => {
      try {
        const response = await axios.get(
          "http://localhost/react/property.php"
        );
        setArea(response.data);
      } catch (error) {
        console.error("Error fetching property area:", error);
        setError(error);
      }
    };

    const fetchPorpertyTypes = async () =>{
      try{
        const response = await axios.get(
          "http://localhost/react/propertyType.php"
        );
        setPropertyType(response.data);
      }catch(error){
          console.error("Error fetching property Type:", error);
          setError(error);
      }
    }
    fetchPropertyArea();
    fetchPorpertyTypes();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
 
  return (
    <div className="home-property section-padding">
      <div className="container">
        <div className="category-main">
        {/* {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.name}</li> // Adjust according to your data structure
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )} */}
          <div className="d-flex align-items-center justify-content-center">
            <span className="property-listning property fw-normal font-nunito fs-16 text-center">
              property
            </span>
          </div>
          <h3 className="text-center fw-bold Poppins text-capitalize title-padding fs-45 text-black">
            Property By Categories
          </h3>
          <div>
            <div className="row">
              <div className="col-lg-8 col-md-6 col-12 mb-md-4 mb-2">
                <a href="/property">
                <div className="property-content position-relative">
                  <img
                    src={apartment}
                    alt="home
                    property apartments"
                    className="w-100"
                  />
                  <div className="property-content-description">
                    <h6 className="fw-bold Poppins text-capitalize text-white fs-22 text-center">
                      Apartments
                    </h6>
                    <p className="text-white fw-normal font-nunito fs-16 text-center">
                      Great Deals Available
                    </p>
                    {/* <div className="property-listning">
                      <span className="text-white fw-normal font-nunito fs-16 text-center text-white">
                        {" "}
                        13 listings
                      </span>
                    </div> */}
                  </div>
                </div></a>
               
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
                <a href="/property">
                <div className="property-content position-relative">
                  <img
                    src={condos}
                    alt="home
                    property "
                    className="w-100"
                  />
                   <a href="/property">
                   <div className="property-content-description">
                    <h6 className="fw-bold Poppins text-capitalize text-white fs-22 text-center fs-22 text-center">
                      Condos
                    </h6>
                    <p className="text-white fw-normal font-nunito fs-16 text-center">
                      Great Deals Available
                    </p>
                    {/* <div className="property-listning">
                      <span className="text-white fw-normal font-nunito fs-16 text-center text-white">
                        13 listings
                      </span>
                    </div> */}
                  </div></a>
                 
                </div>
                </a>
               
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
              <a href="/property">
              <div className="property-content position-relative">
                  <img
                    src={houses}
                    alt="home
                    property apartments"
                    className="w-100"
                  />
                  <div className="property-content-description">
                    <h6 className="fw-bold Poppins text-capitalize text-white fs-22 text-center fs-22 text-center">
                      houses
                    </h6>
                    <p className="text-white fw-normal font-nunito fs-16 text-center">
                      Great Deals Available
                    </p>
                    {/* <div className="property-listning">
                      <span className="text-white fw-normal font-nunito fs-16 text-center text-white">
                        {" "}
                        13 listings
                      </span>
                    </div> */}
                  </div>
                </div>
              </a>
               
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
              <a href="/property">
              <div className="property-content position-relative">
                  <img
                    src={retails}
                    alt="home
                    property apartments"
                    className="w-100"
                  />
                  <div className="property-content-description">
                    <h6 className="fw-bold Poppins text-capitalize text-white fs-22 text-center fs-22 text-center">
                      retail
                    </h6>
                    <p className="text-white fw-normal font-nunito fs-16 text-center">
                      Great Deals Available
                    </p>
                    {/* <div className="property-listning">
                      <span className="text-white fw-normal font-nunito fs-16 text-center ">
                        {" "}
                        13 listings
                      </span>
                    </div> */}
                  </div>
                </div></a>
              
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-md-4 mb-2">
              <a href="/property">
              <div className="property-content position-relative">
                  <img
                    src={villas}
                    alt="home
                    property apartments"
                    className="w-100"
                  />
                  <div className="property-content-description">
                    <h6 className="fw-bold Poppins text-capitalize text-white fs-22 text-center fs-22 text-center">
                      Apartments
                    </h6>
                    <p className="text-white fw-normal font-nunito fs-16 text-center">
                      Great Deals Available
                    </p>
                    {/* <div className="property-listning">
                      <span className="text-white fw-normal font-nunito fs-16 text-center">
                        {" "}
                        13 listings
                      </span>
                    </div> */}
                  </div>
                </div></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeProperty;
