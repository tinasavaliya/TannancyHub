import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyTypes = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch property types from the API
    axios.get('http://localhost/react/getPropertiesType.php')
      .then(response => {
        if (response.data.success) {
          setProperties(response.data.data);
        } else {
          setError('Failed to fetch properties');
        }
      })
      .catch(() => {
        setError('Error fetching data from the server');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="section-padding float-start w-100">
    <div className="container">
      <h1 className='contact-title ps-2 fs-22 text-start fw-semibold text-capitalize title-padding text-black'>Property Types</h1>
      <div class="gray-border ">
      <table class="myproperty w-100">
              <thead className="gray-b-border">
          <tr className='gray-b-border'>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>ID</th>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>Name</th>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>category</th>
          </tr>
        </thead>
        <tbody>
        {properties.map(property => (
            <tr key={property.id} className='gray-b-border'>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{property.id}</td>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{property.name}</td>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{property.category}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

export default PropertyTypes;
