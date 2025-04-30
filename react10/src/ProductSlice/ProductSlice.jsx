import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loading from "daisyui/components/loading";

const initialState = {
  products: [],
  loading: false,
};
const ProductSlice = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        state.cart.push(product);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    extraReducers: (builder) => {
      builder
        .addCase(productThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(productThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload.products;
        })
        .addCase(productThunk.rejected, (state) => {
          state.loading = false;
        });
    },
  },
});

const productThunk = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://dummyjson.com/docs/products");
  const data = await response.json();
  return data;
});
