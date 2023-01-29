import styled from "styled-components";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/slice/commentSlice";
import { LoadingSpinner } from "../../util/LoadingSpinner";

export const InfiListBox = () => {
  const dispatch = useDispatch();
  const { commentScroll, page, isLoading } = useSelector(
    (state) => state.commentSlice
  );

  const [hasNextPage, setHasNextPage] = useState(true);

  const fatchData = () => {
    if (hasNextPage && !isLoading) {
      dispatch(getComments(page));
      setHasNextPage(commentScroll.length % 20 === 0);
    }
  };

  const observerRef = useRef();
  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        fatchData();
      }
    });
    node && observerRef.current.observe(node);
  };

  return (
    <Container>
      {isLoading ? <LoadingSpinner /> : null}
      {commentScroll?.map((item, index) => {
        return (
          <ItemCard key={index}>
            <div>
              <span>ID: {item?.id}</span>
            </div>
            <div>
              <div>{item?.title}</div>
              <div>{item?.content}</div>
            </div>
          </ItemCard>
        );
      })}
      <IoTarget
        id="observeTarget"
        ref={observer}
        style={isLoading ? { display: "none" } : { display: "block" }}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  transition: 0.3s;
`;

const ItemCard = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const IoTarget = styled.div``;
