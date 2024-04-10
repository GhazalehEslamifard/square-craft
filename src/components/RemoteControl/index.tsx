import { Space } from "antd";

import { SliderNumeral } from "@components";

function RemoteControl(): React.ReactElement {
  return (
    <Space direction="vertical" size="large">
      <SliderNumeral />
    </Space>
  );
}

export default RemoteControl;
