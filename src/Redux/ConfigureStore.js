import { configureStore } from '@reduxjs/toolkit';
import detailReducer from './detailSlice';
import cryptoReducer from './cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    detail: detailReducer,
  },
});

export default store;
