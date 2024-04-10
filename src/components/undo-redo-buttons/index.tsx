import { UndoOutlined, RedoOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { memo } from "react";

import { useAppSelector } from "@store/hooks";
import { selectCommandsHistory } from "@store/reducers/commandsHistory";
import { ICommand } from "@types";

function UndoRedoButtons<T>({
  command,
}: {
  command: ICommand<T>;
}): React.ReactElement {
  const commandsHistory = useAppSelector(selectCommandsHistory);

  const handleUndo = () => {
    command.undo();
  };

  const handleRedo = () => {
    command.redo();
  };

  return (
    <Space>
      <Button
        shape="circle"
        disabled={commandsHistory[command.type]?.currentIndex === 0}
        icon={<UndoOutlined />}
        onClick={handleUndo}
      />
      <Button
        shape="circle"
        disabled={
          commandsHistory !== undefined &&
          commandsHistory[command.type].history.length <=
            commandsHistory[command.type].currentIndex + 1
        }
        icon={<RedoOutlined />}
        onClick={handleRedo}
      />
    </Space>
  );
}

export default memo(UndoRedoButtons) as typeof UndoRedoButtons;
