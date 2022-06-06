import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { authApi } from './authApi';
import { filterSlice } from './filter';
import { authSlice } from './authSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});
