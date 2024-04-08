import styled from "@emotion/styled";
import { Layout } from "antd";

export const ContentLayout = styled(Layout.Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SiderLayout = styled(Layout.Sider)`
  background: #e2e5de !important; //https://github.com/ant-design/ant-design/issues/40531
  padding: 40px 24px;
`;

export const Container = styled(Layout)`
  width: 700px;
  height: 350px;
`;
