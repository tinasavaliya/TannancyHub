import React, { useEffect, useState } from "react";
import axios from "axios";

function Sidebar({ selectedCategories = [], selectedPriceRange = [], onCategoryChange, onPriceRangeChange }) {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [error, setError] = useState(null);
  
  const priceRanges = [
    { id: "lowbudget", label: "Low Budget", min: 5000, max: 10000 },
    { id: "mediumbudget", label: "Medium Budget", min: 10000, max: 15000 },
    { id: "highbudget", label: "High Budget", min: 15000, max: 20000 },
  ];

  useEffect(() => {
    const fetchPropertyTypes = async () => {
      try {
        const response = await axios.get("http://localhost/react/propertyType.php");
        setPropertyTypes(response.data);
      } catch (error) {
        console.error("Error fetching property types:", error);
        setError(error);
      }
    };

    fetchPropertyTypes();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Handle price range change
  const handlePriceRangeChange = (id) => {
    const newSelectedPriceRange = selectedPriceRange && selectedPriceRange.includes(id)
      ? selectedPriceRange.filter((rangeId) => rangeId !== id) // Remove if already selected
      : [...(selectedPriceRange || []), id]; // Add if not selected

    onPriceRangeChange(newSelectedPriceRange);
  };

  return (
    <div className="col-lg-4 col-12">
      <div>
        <h3 className="fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black text-hover-orange">
          Advance Information
        </h3>
        <p className="text-start fw-medium font-nunito text-capitalize fs-12 text-lightGray">
          About 9,620 results (0.62 seconds)
        </p>
        <div className="property-type gray-border">
          {/* Property Type Filter */}
          <div>
            <h3 className="fs-22 text-start fw-semibold Poppins text-capitalize title-padding pt-0 text-black text-hover-orange">
              Property Type
            </h3>
            <div className="w-100">
              <form>
                <ul className="w-100">
                  {propertyTypes.length > 0 ? (
                    propertyTypes.map((type) => (
                      <li
                        className="d-flex align-items-center justify-content-between pb-md-2 pb-1"
                        key={type.category}
                      >
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="filter-checkbox-inner">
                            <input
                              type="checkbox"
                              id={type.category}
                              checked={selectedCategories && selectedCategories.includes(type.category)}
                              onChange={() => onCategoryChange(type.category)}
                            />
                            <label
                              htmlFor={type.category}
                              className="text-start fw-bold font-nunito text-capitalize fs-14 text-lightGray"
                            >
                              {type.category}
                            </label>
                          </div>
                        </div>
                        <span className="text-end fw-bold font-nunito text-capitalize fs-14 text-lightGray">
                          {type.count}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li>No property types available</li>
                  )}
                </ul>
              </form>
            </div>
          </div>
          
          {/* Price Filter */}
          <div>
            <h3 className="fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black text-hover-orange">
              Price Range
            </h3>
            <div className="w-100">
              <form>
                <ul className="w-100">
                  {priceRanges.map((range) => (
                    <li
                      className="d-flex align-items-center justify-content-between pb-md-2 pb-1"
                      key={range.id}
                    >
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="filter-checkbox-inner">
                          <input
                            type="checkbox"
                            id={range.id}
                            checked={selectedPriceRange && selectedPriceRange.includes(range.id)} // Safe check
                            onChange={() => handlePriceRangeChange(range.id)} // Call the new handler
                          />
                          <label
                            htmlFor={range.id}
                            className="text-start fw-bold font-nunito text-capitalize fs-14 text-lightGray"
                          >
                            {range.label}
                          </label>
                        </div>
                      </div>
                      <span className="text-end fw-bold font-nunito text-capitalize fs-14 text-lightGray">
                        ${range.min} - ${range.max}
                      </span>
                    </li>
                  ))}
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
