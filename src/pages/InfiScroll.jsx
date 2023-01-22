import styled from "styled-components";
import { CommentForm } from "../components/infiscroll/CommentForm";
import { InfiListBox } from "../components/infiscroll/InfiListBox";

export const InfiScroll = () => {
  return (
    <div>
      <p>무한스크롤 페이지입니다.</p>
      <CommentForm />
      <InfiListBox />
    </div>
  );
};
