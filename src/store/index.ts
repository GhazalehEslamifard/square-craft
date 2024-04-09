import { configureStore } from "@reduxjs/toolkit";

import commandsHistoryReducer from "@store/reducers/commandsHistory";
import squareReducer from "@store/reducers/square";

export const store = configureStore({
  reducer: {
    square: squareReducer,
    commandsHistory: commandsHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
