import { createCommand } from "@commands";
import { AppDispatch } from "@store";
import { setBackgroundColor } from "@store/reducers/square";
import { CommandsEnum, ICommand, ISquare } from "@types";

export const createSetBackgroundColorCommand = (
  dispatch: AppDispatch,
): ICommand<ISquare["backgroundColor"]> => {
  return createCommand<ISquare["backgroundColor"]>({
    dispatch,
    type: CommandsEnum.BACKGROUND_COLOR,
    action: setBackgroundColor,
  });
};
