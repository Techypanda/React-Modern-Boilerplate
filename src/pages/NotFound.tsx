import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";
import { DefaultProps } from "../interface";

function NotFound(props: DefaultProps) {
  return (
    <Container>
      <Typography>Not Found</Typography>
    </Container>
  )
}
export default styled(NotFound)`
`;