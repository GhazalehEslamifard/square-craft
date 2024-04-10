import { RemoteControl, Square } from "@components";

import { Container, ContentLayout, SiderLayout } from "./styles";

function Application(): React.ReactElement {
  return (
    <Container>
      <SiderLayout width={350}>
        <RemoteControl />
      </SiderLayout>
      <ContentLayout>
        <Square />
      </ContentLayout>
    </Container>
  );
}

export default Application;
