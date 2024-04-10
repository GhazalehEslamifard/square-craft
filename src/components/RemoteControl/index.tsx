import { Space } from "antd";

import { ColorPallet, SizeControlButtons, SliderNumeral } from "@components";

function RemoteControl(): React.ReactElement {
  return (
    <Space direction="vertical" size="large">
      <SliderNumeral />
      <ColorPallet />
      <SizeControlButtons />
    </Space>
  );
}

export default RemoteControl;
