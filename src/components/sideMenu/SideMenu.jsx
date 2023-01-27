import styled from "styled-components";
import { useState } from "react";
import { SideMenuBox } from "./SideMenuBox";

export const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {!menuOpen ? (
        <MenuButton onClick={() => setMenuOpen(true)}>사이드메뉴</MenuButton>
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
          <CloseMenuButton onClick={closeMenuHandler}>닫기버튼</CloseMenuButton>
          <SideMenuBox />
        </MenuBox>
      </Container>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
  cursor: auto;
`;

const Container = styled.div`
  position: fixed;
  left: 85%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  z-index: 999;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: white;
`;

const MenuButton = styled.button`
  position: fixed;
  top: 3vw;
  right: 3vw;
`;

const CloseMenuButton = styled.button`
  margin: 20px 20px 0 20px;
  width: 50px;
  height: 50px;
`;