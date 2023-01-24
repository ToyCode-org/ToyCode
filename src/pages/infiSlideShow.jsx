import styled from "styled-components";
import { useState, useEffect } from "react";

export const InfiSlideShow = () => {
  let imageArray = [
    require("../image/cookiezip.png"),
    require("../image/jjapTube0.png"),
    require("../image/jjapTube1.png"),
    require("../image/jjapTube2.png"),
    require("../image/jjapTube3.png"),
    require("../image/jjapTube4.png"),
    require("../image/jjapTube5.png"),
    require("../image/jjapTube6.png"),
    require("../image/jjapTube7.png"),
    require("../image/jjapTube8.png"),
    require("../image/jjapTube9.png"),
    require("../image/safePet.png"),
  ];

  // 가짜 이미지를 포함한 전체 배열 길이
  // 좌우로 이동할 길이
  let idxIndex = imageArray?.length + 2;
  let idxRight = 620;

  // 현재 이미지 number
  // 현재 idx(x축 위치)
  // transition 시간 초기화
  const [imageNum, setImageNum] = useState(1);
  const [idxPx, setIdxPx] = useState(0);
  const [idxInit, setIdxInit] = useState(0.25);

  // 상세페이지 호출시 첫 번째 사진 위치로 이동
  useEffect(() => {
    setTimeout(() => {
      setIdxPx(idxPx - idxRight);
    }, 200);
  }, []);

  // 클릭한 subImage 위치로 이동
  const imageChange = (index) => {
    setImageNum(index);
    setIdxPx(-idxRight * (index + 1));
  };

  // 첫 번째 사진이 아니면 이전 사진으로 이동
  const goPrev = (e) => {
    e.stopPropagation();
    if (imageNum !== 0) {
      setImageNum(imageNum - 1);
      setIdxPx(idxPx + idxRight);
    } else {
      setImageNum(imageArray.length - 1);
      setIdxPx(idxPx + idxRight);
      // 가짜 이미지로 이동하는 척 하면서
      // transition 시간을 0으로 바꾸고 기존 이미지 배열로 이동
      setTimeout(() => {
        setIdxInit(0);
        setIdxPx(imageArray.length * -idxRight);
      }, 300);
    }
    setIdxInit(0.25);
  };

  // 마지막 사진이 아니면 처음 사진으로 이동
  const goNext = (e) => {
    e.stopPropagation();
    if (imageNum !== imageArray.length - 1) {
      setImageNum(imageNum + 1);
      setIdxPx(idxPx - idxRight);
    } else {
      setImageNum(0);
      setIdxPx(idxPx - idxRight);
      // 가짜 이미지로 이동하는 척 하면서
      // transition 시간을 0으로 바꾸고 기존 이미지 배열로 이동
      setTimeout(() => {
        setIdxInit(0);
        setIdxPx(idxRight * -1);
      }, 300);
    }
    setIdxInit(0.25);
  };

  return (
    <Container>
      <SlideContainer onClick={(e) => e.stopPropagation()}>
        <SlideBox
          style={{
            width: `${idxIndex * 620}px`,
            transform: `translateX(${idxPx}px)`,
            transition: `${idxInit}s`,
          }}
        >
          <img src={imageArray[imageArray.length - 1]} alt="cloneEnd" />
          {imageArray?.map((item, index) => (
            <img key={index} src={item} alt="slideImg" />
          ))}
          <img src={imageArray[0]} alt="cloneStart" />
        </SlideBox>
      </SlideContainer>
      <StyledPrevNext
        className="prev"
        onClick={(e) => {
          goPrev(e);
        }}
      >
        {"<"}
      </StyledPrevNext>
      <StyledPrevNext
        className="next"
        onClick={(e) => {
          goNext(e);
        }}
      >
        {">"}
      </StyledPrevNext>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 95vw;

  & ul,
  li {
    list-style: none;
    padding-left: 4px;
  }
`;

const SlideContainer = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;

  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const SlideBox = styled.div`
  display: flex;

  & img {
    width: 600px;
    height: 600px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    text-align: center;
  }
`;

const StyledPrevNext = styled.button`
  width: 4vw;
  height: 4vh;
  border-radius: 50%;
  border: 1px solid rgb(150, 212, 253);
  color: white;
  font-size: 1.8rem;
  background-color: rgb(150, 212, 253);

  position: fixed;
  left: 25%;
  top: 40%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  transition: 0.3s ease-in;

  &.next {
    position: fixed;
    left: 76%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-color: rgb(71, 181, 255);
  }
  &:active {
    animation: prevNext 0.6s;
    @keyframes prevNext {
      from {
        width: 3.9vw;
        height: 3.9vh;
      }
      to {
        width: 4vw;
        height: 4vh;
      }
    }
  }
`;
