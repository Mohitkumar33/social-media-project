import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../features/posts/postSlice";
import { authReducer } from "../features/auth/authSlice";
import { userReducer } from "../features/users/userSlice";

export const store = configureStore({
  reducer: { posts: postReducer, auth: authReducer, user: userReducer },
});
