import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postsStatus: "idle",
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
      state.postsStatus = "loading";
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postsStatus = "fulfilled";
    },
  },
});

export const postReducer = postSlice.reducer;
