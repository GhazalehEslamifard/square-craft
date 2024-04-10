import { Col, Radio, Row, RadioChangeEvent, Space } from "antd";
import { useMemo } from "react";

import { createChangeSizeCommand } from "@commands";
import { UndoRedoButtons } from "@components";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectSquare } from "@store/reducers/square";
import { ISquare } from "@types";

function SizeControlButtons(): React.ReactElement {
  const square = useAppSelector(selectSquare);
  const dispatch = useAppDispatch();

  const changeSizeCommand = useMemo(
    () => createChangeSizeCommand(dispatch),
    [],
  );

  const handleChangeSize = (event: RadioChangeEvent) => {
    changeSizeCommand.execute({ newValue: event.target.value });
  };

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Radio.Group onChange={handleChangeSize} value={square.size}>
          <Space direction="vertical">
            <Radio value={100}>small</Radio>
            <Radio value={150}>medium</Radio>
            <Radio value={200}>large</Radio>
          </Space>
        </Radio.Group>
      </Col>
      <Col span={6}>
        <UndoRedoButtons<ISquare["size"]> command={changeSizeCommand} />
      </Col>
    </Row>
  );
}

export default SizeControlButtons;
