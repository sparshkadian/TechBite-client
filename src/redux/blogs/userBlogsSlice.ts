import { createSlice } from '@reduxjs/toolkit';
import { userBlogType } from '../../types';

const initialState = {
  blogs: [] as userBlogType[],
  loading: false,
};

const userBlogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    loadUserBlogs: (state, action) => {
      state.blogs = [action.payload];
    },
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

export const {
  loadUserBlogs,
  createBlogStart,
  createBlogSuccess,
  createBlogFailure,
} = userBlogsSlice.actions;

export default userBlogsSlice.reducer;
