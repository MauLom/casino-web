import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import userReducer from './reducers/userReducer';
// Import other reducers as needed

export const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
    // other reducers go here
  },
  // Middleware can be customized here if needed
});

export default store;
