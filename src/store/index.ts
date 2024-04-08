import { configureStore } from "@reduxjs/toolkit";

import squareReducer from "@store/reducers/square";

export const store = configureStore({
  reducer: {
    square: squareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
