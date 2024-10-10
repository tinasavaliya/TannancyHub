// // src/actions/auth.js
import { apiRequest } from '../utils/api'; // Your custom API utility
import { loginSuccess } from '../slices/authSlice'; // Redux slice action for login success

export const loginUser = (email, password) => async (dispatch) => {
  try {
    // Make API request using POST method and sending email and password as the payload
    const response = await apiRequest('userLogin.php', 'POST', { email, password });
    
    // Check if the API response indicates success
    if (response.success) {
      // Dispatch loginSuccess action with the response data (includes user info like role)
      dispatch(loginSuccess(response));

      // Return the response object so it can be used elsewhere
      return response;
    } else {
      // Return failure response with message
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Login API request failed:', error.message);
    return { success: false, message: 'API request failed' }; // Return error object in case of failure
  }
};


// import { apiRequest } from '../utils/api';
// import { loginSuccess } from '../slices/authSlice';
// export const loginUser = (email, password) => async (dispatch) => {
//   try {
//     const response = await apiRequest('userLogin.php', 'POST', { email, password });
    
//     if (response.success) {
//       dispatch(loginSuccess(response)); // Dispatch loginSuccess with API response
//       return response; // Return the response so it can be used in the calling function
//     } else {
//       return { success: false, message: response.message }; // Return failure response
//     }
//   } catch (error) {
//     console.error('Login API request failed:', error.message);
//     return { success: false, message: 'API request failed' }; // Return error response
//   }
// };

// import { apiRequest } from '../utils/api';
// import { loginSuccess } from '../slices/authSlice'; // Import the login success action

// export const loginUser = (email, password) => async (dispatch) => {
//   try {
//     // Send the login request to the API with email and password
//     const response = await apiRequest('userLogin.php', 'POST', { email, password });

//     // Check if the API response indicates success
//     if (response && response.success) {
//       // Dispatch the login success action with the response data
//       dispatch(loginSuccess(response));
//     } else {
//       // Log the error message from the API if login fails
//       console.error('Login failed:', response?.message || 'Unknown error occurred');
//     }
//   } catch (error) {
//     // Catch and log any error that occurs during the API request
//     console.error('Login API request failed:', error.message || 'An unexpected error occurred');
//   }
// };

