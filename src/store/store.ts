import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slices/themeSlice";
import authSlice from "./Slices/authSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    token: authSlice
  },
});


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
