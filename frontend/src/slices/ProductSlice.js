import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { product: [], loading: true };

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const prods = await axios.get("/api/product");
    return prods.data.payload;
  }
);

export const appendProduct = createAsyncThunk(
  "/api/appendProduct",
  async (payload) => {
    const res = await axios.post("/api/product", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data.payload;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(appendProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(appendProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.product = [];
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
