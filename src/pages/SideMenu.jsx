import styled from "styled-components";
import { useState } from "react";
import { SideMenuBox } from "../components/sideMenu/SideMenuBox";

export const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {!menuOpen ? (
        <button onClick={() => setMenuOpen(true)}>사이드메뉴</button>
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
          <SideMenuBox />
          <button onClick={closeMenuHandler}>닫기버튼</button>
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
  width: 30vw;
  height: 100vh;
  background-color: white;
`;
