import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <p>참조할 기능을 선택해주세요</p>
      <ButtonsWrap>
        <button onClick={() => navigate("/")}>홈</button>
        <button onClick={() => navigate("/rendertest")}>렌더링 테스트</button>
        <button onClick={() => navigate("/dndkanban")}>칸반보드</button>
        <button>기타</button>
        <button>기타</button>
        <button>기타</button>
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
