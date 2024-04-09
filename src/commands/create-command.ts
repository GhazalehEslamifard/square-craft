import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { AppDispatch } from "@store";
import { ICommand, SquareProperty } from "@types";

interface Props<T extends SquareProperty> {
  dispatch: AppDispatch;
  type: ICommand<T>["type"];
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
    },
    undo() {},
    redo() {},
  };
};
