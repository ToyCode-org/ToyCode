import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "../../pages/SideMenu";

export const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <p>참조할 기능을 선택해주세요</p>
      <ButtonsWrap>
        <button onClick={() => navigate("/")}>홈</button>
        <button onClick={() => navigate("/rendertest")}>렌더링 테스트</button>
        <button onClick={() => navigate("/dndkanban")}>칸반보드</button>
        <button onClick={() => navigate("/pagenation")}>페이지네이션</button>
        <button onClick={() => navigate("/infiscroll")}>무한스크롤</button>
        <button onClick={() => navigate("/slideshow")}>슬라이드</button>
        <button onClick={() => navigate("/infislideshow")}>무한슬라이드</button>
        <SideMenu />
      </ButtonsWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
