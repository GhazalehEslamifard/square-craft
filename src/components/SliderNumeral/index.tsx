import { Col, InputNumber, Row, Slider } from "antd";
import { useMemo } from "react";

import { createSetBorderRadiusCommand } from "@commands";
import { UndoRedoButtons } from "@components";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectSquare } from "@store/reducers/square";
import { ISquare } from "@types";

function SliderNumeral(): React.ReactElement {
  const square = useAppSelector(selectSquare);
  const dispatch = useAppDispatch();

  const setBorderRadiusCommand = useMemo(
    () => createSetBorderRadiusCommand(dispatch),
    [],
  );

  const handleBorderRadiusChange = (newValue: number | null) => {
    setBorderRadiusCommand.execute({
      newValue: newValue === null ? 0 : newValue,
    });
  };

  return (
    <Row justify="space-between" align="middle">
      <Col span={8}>
        <Slider
          min={0}
          max={50}
          step={5}
          onChange={handleBorderRadiusChange}
          value={square.borderRadius}
        />
      </Col>
      <Col span={8}>
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
      <Col span={6}>
        <UndoRedoButtons<ISquare["borderRadius"]>
          command={setBorderRadiusCommand}
        />
      </Col>
    </Row>
  );
}

export default SliderNumeral;
