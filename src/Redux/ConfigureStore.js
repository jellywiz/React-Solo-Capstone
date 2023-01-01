import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import detailReducer from './detailSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    detail: detailReducer,
  },
});

export default store;
