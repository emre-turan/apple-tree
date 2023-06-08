import { configureStore } from "@reduxjs/toolkit";
import appleReducer from "./applesSlice";

export const store = configureStore({
  reducer: {
    apple: appleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
