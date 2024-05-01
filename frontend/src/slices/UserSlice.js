import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
};

export const login = createAsyncThunk("userslice/login", async (data) => {
  const res = await axios.post("/api/user/login", data);
  return res.data.payload;
});

export const register = createAsyncThunk("userslice/register", async (data) => {
  const res = await axios.post("/api/user/", data);
  return res.data.payload;
});

const userslice = createSlice({
  name: "userslice",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.user = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.accessToken;
      localStorage.setItem("accesstoken", action.payload.accessToken);
      localStorage.setItem("id", action.payload.id);

      console.log(action.payload);
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.accessToken;
      localStorage.setItem("accesstoken", action.payload.accessToken);
      localStorage.setItem("id", action.payload.id);
    });
  },
});

export const { logout } = userslice.actions;
export default userslice.reducer;
