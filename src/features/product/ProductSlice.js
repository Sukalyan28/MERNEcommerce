import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilters } from './ProductAPI';

const initialState = {
  products: [],
  status: 'idle',
};



export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const ProductSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
      
      state.value += 1;
    },
   
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
      
  },
});

export const { increment } = ProductSlice.actions;


export const selectAllProducts = (state) => state.product.products;



export default ProductSlice.reducer;
