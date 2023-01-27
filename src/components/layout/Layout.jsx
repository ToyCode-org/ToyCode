import styled from "styled-components";
import { HeaderNav } from "./HeaderNav";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../theme/theme";
import { useState } from "react";

export const Layout = ({ children }) => {
  const [isDark, setisDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <HeaderNav isDark={isDark} setisDark={setisDark} />
        <ChildrenWrap>{children}</ChildrenWrap>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.mainFontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  transition: 0.3s;
`;

const ChildrenWrap = styled.div`
  margin: 0 auto;
  padding-top: 150px;
  width: 100%;
`;
