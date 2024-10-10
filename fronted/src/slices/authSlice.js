// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initialize user as null or empty object
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = {
        name: action.payload.name,
        userId: action.payload.userId,
        role: action.payload.role, // Set name
        // Add other user properties if needed
      };
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      localStorage.setItem('user', JSON.stringify({ name: action.payload.name, userId: action.payload.userId, role: action.payload.role })); // Store user in localStorage
      localStorage.setItem('token', action.payload.token); // Store token in localStorage
    },
    
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null, // Initialize user as null or empty object
//   isAuthenticated: false,
//   loading: true,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.user = action.payload.user; // Payload should have user data
//       state.token = action.payload.token; // Store token if needed
//       state.isAuthenticated = true;
//       state.loading = false;
//       localStorage.setItem('user', JSON.stringify(action.payload.user)); // Store user in localStorage
//       localStorage.setItem('token', action.payload.token); // Store token in localStorage
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.loading = false;
//       localStorage.removeItem('user');
//       localStorage.removeItem('token');
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;
