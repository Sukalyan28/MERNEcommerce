import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

import productReducer from '../features/product/ProductSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
