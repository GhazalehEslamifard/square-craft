import { Col, InputNumber, Row, Slider } from "antd";

import { createSetBorderRadiusCommand } from "@commands";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectSquare } from "@store/reducers/square";

function SliderNumeral(): React.ReactElement {
  const square = useAppSelector(selectSquare);
  const dispatch = useAppDispatch();

  const setBorderRadiusCommand = createSetBorderRadiusCommand(dispatch);

  const handleBorderRadiusChange = (newValue: number | null) => {
    setBorderRadiusCommand.execute({
      newValue: newValue === null ? 0 : newValue,
    });
  };

  return (
    <Row justify="space-between" align="middle">
      <Col span={10}>
        <Slider
          min={0}
          max={50}
          step={5}
          onChange={handleBorderRadiusChange}
          value={square.borderRadius}
        />
      </Col>
      <Col span={10}>
        <InputNumber
          addonAfter={"%"}
          controls={false}
          min={0}
          max={50}
          step={5}
          onChange={handleBorderRadiusChange}
          value={square.borderRadius}
        />
      </Col>
    </Row>
  );
}

export default SliderNumeral;
