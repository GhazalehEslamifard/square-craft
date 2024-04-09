// Types for Square slice state
export interface ISquare {
  borderRadius: number;
  backgroundColor: string;
  size: number;
}

export type SquareProperty = ISquare[keyof ISquare];

// Commands object types
export enum CommandsEnum {
  BORDER_RADIUS = "setBorderRadius",
  BACKGROUND_COLOR = "setBackgroundColor",
  SIZE = "changeSize",
}

export interface ICommand<T> {
  type: CommandsEnum;
  execute: (arg: { [key: string]: T }) => void;
  undo: () => void;
  redo: () => void;
}
