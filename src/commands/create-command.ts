import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { AppDispatch } from "@store";
import { addToHistory } from "@store/reducers/commandsHistory";
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
    undo() {},
    redo() {},
  };
};
