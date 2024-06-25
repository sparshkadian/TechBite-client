import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './user/userSlice';
import blogsSlice from './blogs/userBlogsSlice';
import { userType } from '../types';
import { userBlogType } from '../types';

const rootReducer = combineReducers({ user: userSlice, userBlogs: blogsSlice });

export interface RootState {
  user: {
    currentUser: userType;
    loading: string;
  };
  userBlogs: {
    blogs: userBlogType[];
    loading: string;
  };
}

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
