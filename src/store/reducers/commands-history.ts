import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@store";
import { CommandsEnum, ICommandsHistory, SquareProperty } from "@types";

import { initialSquareState } from "./square";

const initialCommandsHistoryState: ICommandsHistory<SquareProperty> = {
  changeSize: {
    history: [initialSquareState.size],
    currentIndex: 0,
  },
  setBackgroundColor: {
    history: [initialSquareState.backgroundColor],
    currentIndex: 0,
  },
  setBorderRadius: {
    history: [initialSquareState.borderRadius],
    currentIndex: 0,
  },
};

export const commandsHistorySlice = createSlice({
  name: "commandsHistory",
  initialState: initialCommandsHistoryState,
  reducers: {
    addToHistory: (
      state,
      action: PayloadAction<{
        type: CommandsEnum;
        newValue: SquareProperty;
      }>,
    ) => {
      const commandHistory = state[action.payload.type];

      if (commandHistory !== undefined) {
        commandHistory.history.push(action.payload.newValue);
        commandHistory.currentIndex = commandHistory.history.length - 1;
      }
    },
    undo: (
      state,
      action: PayloadAction<{
        type: CommandsEnum;
      }>,
    ) => {
      const commandHistory = state[action.payload.type];

      if (commandHistory !== undefined) {
        commandHistory.currentIndex--;
      }
    },
    redo: (
      state,
      action: PayloadAction<{
        type: CommandsEnum;
      }>,
    ) => {
      const commandHistory = state[action.payload.type];

      if (commandHistory !== undefined) {
        commandHistory.currentIndex++;
      }
    },
  },
});

export const selectCommandsHistory = (state: RootState) =>
  state.commandsHistory;

export const { addToHistory, undo, redo } = commandsHistorySlice.actions;
export default commandsHistorySlice.reducer;
