import { createCommand } from "@commands";
import { AppDispatch } from "@store";
import { changeSize } from "@store/reducers/square";
import { CommandsEnum, ICommand, ISquare } from "@types";

export const createChangeSizeCommand = (
  dispatch: AppDispatch,
): ICommand<ISquare["size"]> => {
  return createCommand<ISquare["size"]>({
    dispatch,
    type: CommandsEnum.SIZE,
    action: changeSize,
  });
};
