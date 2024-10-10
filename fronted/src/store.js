// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

// Initialize state from localStorage
const persistedState = {
  auth: {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'), // True if token exists
    loading: false, // Set loading to false since we are initializing state
  },
};
  
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: persistedState, // Load the persisted state
});

export default store;
