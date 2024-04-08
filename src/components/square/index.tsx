import { StyledSquare } from "./styles";

function Square(): React.ReactElement {
  return (
    <StyledSquare size={100} borderRadius={0} backgroundColor={"#e38e88"} />
  );
}

export default Square;
