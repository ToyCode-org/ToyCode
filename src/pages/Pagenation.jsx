import styled from "styled-components";
import { CommentForm } from "../components/infiscroll/CommentForm";
import { PageData } from "../components/pagenation/PageData";

export const Pagenation = () => {
  return (
    <Container>
      <CommentForm />
      <PageData />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;

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
