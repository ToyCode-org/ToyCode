import styled from "styled-components";

export const SideMenuBox = () => {
  return (
    <Container>
      <img
        src="https://source.boringavatars.com/beam/110/{id144}?colors=c5c5c5,c5c5c5,c5c5c5,ffffff,919191"
        alt="profile"
      />
      <p>yoHan</p>
      <Content>
        <span>Connect</span>
        <span>
          Github :{" "}
          <a
            href="https://github.com/LEE-YO-HAN"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/LEE-YO-HAN
          </a>
        </span>
        <span>
          blog :{" "}
          <a
            href="https://hanbbistory.tistory.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://hanbbistory.tistory.com/
          </a>
        </span>
        <span>Email : yhl0078@gmail.com</span>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  animation: colorChanger;

  & span:first-child {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  & span {
    margin-bottom: 20px;
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
