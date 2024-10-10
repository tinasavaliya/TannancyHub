// import Breadcrumb from "../components/Breadcrumb.jsx";
// import DreamHome from "../components/DreamHome.jsx";
// // import Property from "../components/Property.jsx";
// import PropertyList from "../components/PropertyList.jsx";
// const PropertyPage = () => {
//   return (
//     <>
//       <Breadcrumb pagetitle="Property List" />
//       {/* <Property /> */}
//       <PropertyList />
//       <DreamHome />
//     </>
//   );
// };
// export default PropertyPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropertyList from './PropertyList';
import PropertyList from '../components/PropertyList';
import Sidebar from '../components/Sidebar';

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    filterProperties();
  }, [properties, selectedCategories, selectedPriceRange, searchTerm]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost/react/property.php');
      setProperties(response.data.properties || response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const filterProperties = () => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(property => 
        selectedCategories.includes(property.category)
      );
    }

    if (selectedPriceRange) {
      filtered = filtered.filter(property => {
        const price = parseFloat(property.price);
        switch (selectedPriceRange) {
          case 'lowbudget':
            return price >= 5000 && price <= 10000;
          case 'medium':
            return price > 10000 && price <= 30000;
          case 'highbudget':
            return price > 30000;
          default:
            return true;
        }
      });
    }

    setFilteredProperties(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range === selectedPriceRange ? null : range);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div className="row">
          <PropertyList 
            properties={filteredProperties}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          <Sidebar 
            selectedCategories={selectedCategories}
            selectedPriceRange={selectedPriceRange}
            onCategoryChange={handleCategoryChange}
            onPriceRangeChange={handlePriceRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
