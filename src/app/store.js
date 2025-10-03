import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { authApi } from "../features/authApi";
import cartReducer from "../features/cart";

const Store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default Store;
