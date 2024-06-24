//@ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import userSlice from '../user/userSlice';

const initialState = {
  blogs: [],
  loading: false,
};

const userBlogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    createBlogStart: (state) => {
      state.loading = true;
    },
    createBlogSuccess: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      state.loading = false;
    },
    createBlogFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { createBlogStart, createBlogSuccess, createBlogFailure } =
  userBlogsSlice.actions;

export default userBlogsSlice.reducer;
