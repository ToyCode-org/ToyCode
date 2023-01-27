import styled from "styled-components";
import { CommentForm } from "../components/infiscroll/CommentForm";
import { InfiListBox } from "../components/infiscroll/InfiListBox";

export const InfiScroll = () => {
  return (
    <Container>
      <CommentForm />
      <InfiListBox />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  transition: 0.3s;

  animation: fadein 0.3s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
