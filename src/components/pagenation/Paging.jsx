import styled from "styled-components";
import { useEffect, useState } from "react";

export const Paging = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  prevPageText,
  nextPageText,
  handlePageChange,
  maxItems,
}) => {
  // 페이지 버튼 총 길이
  const totalLength =
    Math.ceil(totalItemsCount / itemsCountPerPage) < 1
      ? 1
      : Math.ceil(totalItemsCount / itemsCountPerPage);
  // 버튼 총 길이를 배열로 생성
  const pagingArray = Array.from(
    {
      length: totalLength,
    },
    (item, index) => index
  );

  // 현재 페이지가 바뀔때마다.
  // 페이지 묶음의 몇 번째인지 설정
  const [listNum, setListNum] = useState(1);
  useEffect(() => {
    setListNum(Math.floor(parseInt((activePage + maxItems - 1) / maxItems)));
  }, [activePage]);

  // 한 묶음에 보여줄 페이지 넘버
  const firPagingArr = Array.from(
    {
      length: maxItems,
    },
    (item, index) => {
      return index;
    }
  );
  const otherPagingArr = Array.from(
    {
      length: maxItems,
    },
    (item, index) => {
      return index + maxItems * (listNum - 1);
    }
  );
  const listNumIndex = listNum === 1 ? firPagingArr : otherPagingArr;

  return (
    <PagingUl>
      <li
        onClick={() => {
          if (activePage !== 1) {
            handlePageChange(activePage - 1);
          }
        }}
        style={activePage === 1 ? { backgroundColor: "#e9e9e9" } : null}
      >
        {prevPageText}
      </li>
      {pagingArray.map((item, index) => {
        if (
          listNumIndex[0] <= index &&
          index <= listNumIndex[listNumIndex.length - 1]
        ) {
          return (
            <li
              key={item}
              id={index + 1}
              className={index + 1 === activePage ? "activePage" : "page"}
              onClick={() => {
                handlePageChange(index + 1);
              }}
            >
              {index + 1}
            </li>
          );
        }
      })}
      <li
        onClick={() => {
          if (activePage !== pagingArray.length) {
            handlePageChange(activePage + 1);
          }
        }}
        style={
          activePage === pagingArray.length
            ? { backgroundColor: "#e9e9e9" }
            : null
        }
      >
        {nextPageText}
      </li>
    </PagingUl>
  );
};

const PagingUl = styled.ul`
  padding: 0;
  margin: auto;
  margin-top: 50px;
  width: 300px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;

  & ul,
  li {
    list-style: none;
  }
  & li {
    width: 35px;
    height: 35px;
    text-align: center;
    font-size: 25px;
    border-radius: 5px;
    background-color: #e6e6e6;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: gray;
    }
  }
  & .activePage {
    color: white;
    background-color: gray;
  }

  & li:first-child,
  li:last-child {
    background-color: #e6e6e6;
    &:hover {
      background-color: gray;
    }
  }
`;
