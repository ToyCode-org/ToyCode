import styled from "styled-components";

export const Home = () => {
  return (
    <Container>
      <ContentWrap>
        <h2>1. 소개</h2>
        <p>
          상단의 기능 명을 클릭하면, 해당 기능의 간단한 동작을 볼 수 있습니다.
        </p>
        <CustomDetails>
          <summary> 사용된 패키지 </summary>
          <span>- React 18.2.0</span>
          <span>
            - react-redux 8.0.5 {"("}@reduxjs/toolkit 1.9.1{")"}
          </span>
          <span>- react-router-dom 6.6.1</span>
          <span>- styled-components 5.3.6</span>
          <span>- axios 1.2.2</span>
          <span>- json-server 0.17.1</span>
        </CustomDetails>
        <h2>2. 구현 코드</h2>
        <a
          href="https://github.com/LEE-YO-HAN/my-ref-feat/tree/main/src"
          target="_blank"
          rel="noreferrer"
        >
          코드 조회하기{" - (go to repository)"}
        </a>
        <h2>3. 기능</h2>
        <span>
          Kanban board <br /> - drag & drop event를 통해 비교할 카드에 drop시킨
          경우, 해당 카드의 sortId를 비교해 대상 카드 위로 정렬.
          <br />
          drop 대상이 카드가 아닌 kanban box인 경우, 해당 box의 끝으로 정렬.
        </span>
        <br />
        <br />
        <span>
          Pagenation <br /> - 라이브러리와 비슷한 구조로 페이지를 나눠주는
          버튼을 만들어 준 뒤, Id{"(pk)"} 기준 전체 데이터의 내림차순 정렬의
          페이지별 데이터를 가져옴
        </span>
        <br />
        <br />
        <span>
          Infinity scroll <br /> - IntersectionObserver을 이용해 불러온 데이터의
          끝{"(view의 바닥 끝)"}이 화면에 보이는 경우, 새 데이터를 pagenation과
          유사하게 불러옴.
        </span>
        <br />
        <br />
        <span>
          Slide Show <br /> - transform: translateX{"()"}를 이용해 바꾸고자 하는
          이미지의 크기에 맞게 x 좌표를 이동해주며 슬라이드 설정.
        </span>
        <br />
        <br />
        <span>
          Carousel Slide Show <br /> - Slide Show와 유사하나, 처음과 끝에 서로
          반대되는 fake image를 추가로 놓고,
          <br />
          fake image로 이동하는 모션을 만든 후, transition 시간을 0으로 바꾸고
          원본 이미지 배열로 이동시켜 구현.
        </span>
        <br />
        <br />
        <span>
          Darkmode <br /> - styled-components의 themeProvider를 이용해 Darkmode
          여부에 따라 지정된 스타일을 적용하여 구현
        </span>
        <br />
        <br />
        <span>
          SideMenu <br /> - 메뉴 버튼 클릭 시, background를 포함한 menu box를
          불러온다.
          <br />
          움직이는 메뉴 바를 만들기 위해서 transform: translate()를 이용해 화면
          밖에 있던 메뉴 창을 화면 안으로 자연스럽게 이동시키는 방식을 택했다.
        </span>
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: 0.3s;

  animation: Homefadein 1s;
  @keyframes Homefadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & a {
    @keyframes colorChanger {
      from {
        color: black;
      }
      50% {
        color: white;
      }
      to {
        color: black;
      }
    }
  }
  & a:link,
  a:visited {
    color: ${(props) => props.theme.mainFontColor};
    text-decoration: none;
  }
  & a:hover {
    animation: colorChanger 1s infinite;
  }
`;

const ContentWrap = styled.div`
  margin: 0 auto;
  width: 80vw;
`;

const CustomDetails = styled.details`
  display: flex;
  flex-direction: column;
  width: 90%;
  & summary {
    cursor: pointer;
  }

  & summary::marker {
    content: "▶";
    font-family: monospace;
  }
  &[open] summary::marker {
    content: "▼";
    font-family: monospace;
  }

  & span {
    height: 0%;
    animation: closeComments 0.6s;
    @keyframes closeComments {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
  &[open] span {
    animation: opneComments 0.6s;
    @keyframes opneComments {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
