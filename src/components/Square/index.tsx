import { useAppSelector } from "@store/hooks";
import { selectSquare } from "@store/reducers/square";

import { StyledSquare } from "./styles";

function Square(): React.ReactElement {
  const square = useAppSelector(selectSquare);

  return (
    <StyledSquare
      size={square.size}
      borderRadius={square.borderRadius}
      backgroundColor={square.backgroundColor}
    />
  );
}

export default Square;
