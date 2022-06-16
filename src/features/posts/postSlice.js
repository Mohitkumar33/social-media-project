import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  posts: [],
};

export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  const { data } = await axios.get("/api/posts");
  return data.posts;
});

const postSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {},
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "fulfilled";
    },
  },
});

export const postReducer = postSlice.reducer;
