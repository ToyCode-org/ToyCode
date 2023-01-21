import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";

export const Layout = ({ children }) => {
  return (
    <Container>
      <HeaderNav />
      {children}
    </Container>
  );
};

const Container = styled.div``;
