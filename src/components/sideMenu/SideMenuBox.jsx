import styled from "styled-components";

export const SideMenuBox = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {menuOpen ? (
        <Background onClick={() => setMenuOpen(false)}>
          <Container onClick={(e) => e.stopPropagation()}>
            <MenuBox>메뉴 박스 내부</MenuBox>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  cursor: auto;
`;

const Container = styled.div`
  position: fixed;
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MenuBox = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: white;
`;
