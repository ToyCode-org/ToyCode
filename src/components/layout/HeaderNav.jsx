import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "../sideMenu/SideMenu";
import { useLocation } from "react-router-dom";
import { Darkmode } from "./Darkmode";

export const HeaderNav = ({ isDark, setisDark }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const locationHandler = (e) => {
    let goPathname = e.target.name;
    navigate(goPathname);
  };

  const buttonArr = [
    ["Home", "/"],
    ["Kanban Board", "/dndkanban"],
    ["Pagenation", "/pagenation"],
    ["Infinity scroll", "/infiscroll"],
    ["Slide Show", "/slideshow"],
    ["Carousel Slide Show", "/infislideshow"],
  ];

  return (
    <Container>
      <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Toy Features
      </h1>
      <ButtonsWrap>
        {buttonArr.map((item, index) => {
          return (
            <button
              key={index}
              name={item[1]}
              onClick={locationHandler}
              style={
                item[1] === pathname
                  ? {
                      color: isDark ? "black" : "white",
                      backgroundColor: isDark ? "white" : "black",
                    }
                  : null
              }
            >
              {item[0]}
            </button>
          );
        })}
      </ButtonsWrap>
      <Darkmode setisDark={setisDark} />
      <SideMenu isDark={isDark} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.mainFontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  transition: 0.3s;

  animation: Headerfadein 1s;
  @keyframes Headerfadein {
    from {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95vw;
  height: 50px;
  border-bottom: ${(props) => props.theme.border};
  transition: 0.3s;
  & button {
    width: 15vw;
    font-size: 16px;
    font-weight: bold;
    border: none;
    color: ${(props) => props.theme.mainFontColor};
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #a0a0a034;
    }
  }
`;
