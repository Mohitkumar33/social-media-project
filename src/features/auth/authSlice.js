import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "../../services/authServices";

const initialState = {
  token: "" || JSON.parse(localStorage.getItem("accessToken")),
  user: null || JSON.parse(localStorage.getItem("profileUser")),
  authStatus: "idle",
  authError: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await loginService(username, password);
      console.log(`this is response under loginUser function--> ${response}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.user = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log("i am found", payload.foundUser);
      state.user = payload.foundUser;
      state.token = payload.encodedToken;
      state.authStatus = "success";
      localStorage.setItem("accessToken", JSON.stringify(payload.encodedToken));
      localStorage.setItem("profileUser", JSON.stringify(payload.foundUser));
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.authStatus = "rejected";
      state.authError = payload.errors;
    },
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
