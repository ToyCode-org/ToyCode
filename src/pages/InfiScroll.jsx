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
  /* margin: 0 auto;
  width: 80vw; */
  background-color: white;
`;
