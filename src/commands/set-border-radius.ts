import { AppDispatch } from "@store";
import { setBorderRadius } from "@store/reducers/square";
import { CommandsEnum, ICommand, ISquare } from "@types";

import { createCommand } from "./create-command";

export const createSetBorderRadiusCommand = (
  dispatch: AppDispatch,
): ICommand<ISquare["borderRadius"]> => {
  return createCommand<ISquare["borderRadius"]>({
    dispatch,
    type: CommandsEnum.BORDER_RADIUS,
    action: setBorderRadius,
  });
};
