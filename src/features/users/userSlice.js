import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserService } from "../../services/userServices";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUserService();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  usersStatus: "idle",
  allUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.usersStatus = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
      state.usersStatus = "fulfilled";
    },
  },
});

export const userReducer = userSlice.reducer;
