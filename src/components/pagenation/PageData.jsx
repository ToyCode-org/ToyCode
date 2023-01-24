import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paging } from "./Paging";
import {
  getCommentsPaging,
  getCommentsAll,
} from "../../redux/slice/commentSlice";

export const PageData = () => {
  const dispatch = useDispatch();
  const { comment, maxLength } = useSelector((state) => state.commentSlice);
  console.log(comment);
  console.log(maxLength);

  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const fetchCommentList = (activePage) => {
    dispatch(getCommentsPaging(activePage));
  };

  // init pageData
  useEffect(() => {
    dispatch(getCommentsAll());
  }, []);

  useEffect(() => {
    fetchCommentList(activePage);
  }, [activePage]);

  return (
    <Container>
      <p>페이지데이터</p>
      <CardWrap>
        {comment?.map((item, index) => {
          return (
            <Card key={index}>
              <p>{item.id}</p>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </Card>
          );
        })}
      </CardWrap>
      <Paging
        activePage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={maxLength}
        prevPageText={"<"}
        nextPageText={">"}
        handlePageChange={handlePageChange}
        maxItems={5}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 90vw;
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw 25vw;
  width: 95vw;
`;

const Card = styled.div`
  margin-bottom: 20px;
  padding: 5px;
`;
