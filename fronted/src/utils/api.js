// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost/react';

const getToken = () => {
  return localStorage.getItem('token');
};

export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  const token = getToken(); // Retrieve token from localStorage
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }), // Add Authorization header only if token exists
  };

  try {
    const response = await axios({
      url: `${API_BASE_URL}/${endpoint}`,
      method,
      headers,
      data,
    });
    
    // Check if response data is valid JSON
    if (response.data) {
      return response.data;
    } else {
      throw new Error('Response data is not valid JSON');
    }
  } catch (error) {
    console.error('API request errorrr:', error);
    throw error;
  }
};
