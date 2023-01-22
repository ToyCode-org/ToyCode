import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/slice/commentSlice";
import { LoadingSpinner } from "../../util/LoadingSpinner";

export const InfiListBox = () => {
  const dispatch = useDispatch();
  const { comment, isLoading } = useSelector((state) => state.commentSlice);

  const page = useRef(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fatchData = () => {
    if (hasNextPage && !isLoading) {
      dispatch(getComments(page.current));
      setHasNextPage(comment.length % 20 === 0);
      page.current += 1;
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

  useEffect(() => {
    fatchData();
  }, []);

  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      {comment?.map((item, index) => {
        return (
          <Container key={index}>
            <div>
              <span>ID: {item?.id}</span>
            </div>
            <div>
              <div>{item?.title}</div>
              <div>{item?.content}</div>
            </div>
          </Container>
        );
      })}
      <IoTarget
        id="observeTarget"
        ref={observer}
        style={isLoading ? { display: "none" } : { display: "block" }}
      >
        타겟
      </IoTarget>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100px;
  box-shadow: 1px 1px 4px 1px #444444;
`;

const IoTarget = styled.div``;
