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
  margin-top: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const CardWrap = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: 15vw 15vw 15vw 15vw;
  grid-gap: 0 30px;
  min-height: 650px;
`;

const Card = styled.div`
  width: 15vw;
  height: 100px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.3s;
`;
