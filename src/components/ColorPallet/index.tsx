import { Col, ColorPicker, Row } from "antd";
import { Color } from "antd/es/color-picker";
import { useMemo } from "react";

import { createSetBackgroundColorCommand } from "@commands";
import { UndoRedoButtons } from "@components";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectSquare } from "@store/reducers/square";
import { ISquare } from "@types";

function ColorPallet(): React.ReactElement {
  const square = useAppSelector(selectSquare);
  const dispatch = useAppDispatch();

  const setBackgroundColorCommand = useMemo(
    () => createSetBackgroundColorCommand(dispatch),
    [],
  );

  const handleColorPickerChange = (newValue: Color) => {
    setBackgroundColorCommand.execute({ newValue: newValue.toHexString() });
  };

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <ColorPicker
          size="large"
          showText
          value={square.backgroundColor}
          onChange={handleColorPickerChange}
        />
      </Col>
      <Col span={6}>
        <UndoRedoButtons<ISquare["backgroundColor"]>
          command={setBackgroundColorCommand}
        />
      </Col>
    </Row>
  );
}

export default ColorPallet;
