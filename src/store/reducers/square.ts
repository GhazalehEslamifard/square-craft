import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@store";
import { ISquare } from "@types";

export const initialSquareState: ISquare = {
  borderRadius: 0,
  backgroundColor: "#e7ad99",
  size: 100,
};

export const squareSlice = createSlice({
  name: "square",
  initialState: initialSquareState,
  reducers: {
    setBorderRadius: (
      state,
      action: PayloadAction<ISquare["borderRadius"]>,
    ) => {
      state.borderRadius = action.payload;
    },
    setBackgroundColor: (
      state,
      action: PayloadAction<ISquare["backgroundColor"]>,
    ) => {
      state.backgroundColor = action.payload;
    },
    changeSize: (state, action: PayloadAction<ISquare["size"]>) => {
      state.size = action.payload;
    },
  },
});

export const selectSquare = (state: RootState) => state.square;

export const { setBorderRadius, setBackgroundColor, changeSize } =
  squareSlice.actions;

export default squareSlice.reducer;
