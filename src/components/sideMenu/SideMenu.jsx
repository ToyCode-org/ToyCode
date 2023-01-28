import styled from "styled-components";
import { useState } from "react";
import { SideMenuBox } from "./SideMenuBox";

export const SideMenu = ({ isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <ZIndex>
      {!menuOpen ? (
        <MenuButton
          src={require(`../../image/${isDark ? "whitemenu" : "blackmenu"}.png`)}
          onClick={() => setMenuOpen(true)}
        />
      ) : null}
      <Background
        onClick={closeMenuHandler}
        style={menuOpen ? { display: "block" } : { display: "none" }}
      />
      <Container
        onClick={(e) => e.stopPropagation()}
        style={
          menuOpen
            ? { transform: "translate(-50%, -50%)" }
            : { transform: "translate(50%, -50%)" }
        }
      >
        <MenuBox>
          <CloseMenuButton
            src={require(`../../image/${
              isDark ? "whiteclose" : "blackclose"
            }.png`)}
            onClick={closeMenuHandler}
          />
          <SideMenuBox />
        </MenuBox>
      </Container>
    </ZIndex>
  );
};

const ZIndex = styled.div`
  position: relative;
  z-index: 999;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  cursor: auto;

  animation: backgroundFadein 0.3s;
  @keyframes backgroundFadein {
    from {
      background-color: rgba(0, 0, 0, 0.1);
    }
    to {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const Container = styled.div`
  position: fixed;
  left: 85%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  border-left: ${(props) => props.theme.border};
  z-index: 10;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const MenuButton = styled.img`
  position: fixed;
  top: 2vw;
  right: 2vw;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: gray;
  }
`;

const CloseMenuButton = styled.img`
  margin: 20px 20px 0 20px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: gray;
  }
`;
