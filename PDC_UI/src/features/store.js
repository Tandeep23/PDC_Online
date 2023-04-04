import { configureStore } from '@reduxjs/toolkit';
import userReducer from './uesrSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
