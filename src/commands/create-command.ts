import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { AppDispatch, store } from "@store";
import {
  addToHistory,
  redo,
  selectCommandsHistory,
  undo,
} from "@store/reducers/commandsHistory";
import { CommandsEnum, ICommand, SquareProperty } from "@types";

interface Props<T extends SquareProperty> {
  dispatch: AppDispatch;
  type: CommandsEnum;
  action: ActionCreatorWithPayload<T>;
}

export const createCommand = <T extends SquareProperty>({
  dispatch,
  type,
  action,
}: Props<T>): ICommand<T> => {
  return {
    type,
    execute({ newValue }) {
      dispatch(action(newValue));
      dispatch(addToHistory({ type, newValue }));
    },
    undo() {
      const commandsHistory = selectCommandsHistory(store.getState())[type];

      if (commandsHistory !== undefined && commandsHistory.currentIndex > 0) {
        const previousValue = commandsHistory.history[
          commandsHistory.currentIndex - 1
        ] as T;

        dispatch(action(previousValue));
        dispatch(undo({ type }));
      }
    },
    redo() {
      const commandsHistory = selectCommandsHistory(store.getState())[type];

      if (
        commandsHistory !== undefined &&
        commandsHistory.history.length - 1 > commandsHistory.currentIndex
      ) {
        const nextValue = commandsHistory.history[
          commandsHistory.currentIndex + 1
        ] as T;

        dispatch(action(nextValue));
        dispatch(redo({ type }));
      }
    },
  };
};
