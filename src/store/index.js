import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/store/slices/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: process.env.ENABLE_REDUX_DEV_TOOLS
});
