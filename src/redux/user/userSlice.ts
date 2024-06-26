import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpStart: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signUpFailure: (state) => {
      state.loading = false;
    },
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    profileUpdateStart: (state) => {
      state.loading = true;
    },
    profileUpdateSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    profileUpdateFailure: (state) => {
      state.loading = false;
    },
    OAuthStart: (state) => {
      state.loading = true;
    },
    OAuthSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    OAuthFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutUser,
  profileUpdateStart,
  profileUpdateSuccess,
  profileUpdateFailure,
  OAuthStart,
  OAuthSuccess,
  OAuthFailure,
} = userSlice.actions;

export default userSlice.reducer;
