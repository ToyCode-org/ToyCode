import styled from "styled-components";
import { useState } from "react";

export const SlideShow = () => {
  let imageArray = [
    require("../image/cookiezip.png"),
    require("../image/jjapTube0.png"),
    require("../image/jjapTube1.png"),
    require("../image/safePet.png"),
  ];

  // 전체 배열 길이
  // 좌우로 이동할 길이 : SlideContainer/SlideBox의 width와 동일해야함
  let imageArrLength = imageArray?.length;
  let indexRight = 600;

  // 현재 이미지 number
  // 현재 index(x축 위치)
  const [imageNum, setImageNum] = useState(0);
  const [indexPx, setIndexPx] = useState(0);

  // 첫 번째 사진이 아니면 다음 사진으로 이동
  const goPrev = (e) => {
    e.stopPropagation();
    if (imageNum !== 0) {
      setImageNum(imageNum - 1);
      setIndexPx(indexPx + indexRight);
    }
  };

  // 마지막 사진이 아니면 다음 사진으로 이동
  const goNext = (e) => {
    e.stopPropagation();
    if (imageNum !== imageArray.length - 1) {
      setImageNum(imageNum + 1);
      setIndexPx(indexPx - indexRight);
    }
  };

  return (
    <Container>
      <SlideContainer onClick={(e) => e.stopPropagation()}>
        <SlideBox
          style={{
            width: `${imageArrLength * indexRight}px`,
            transform: `translateX(${indexPx}px)`,
          }}
        >
          {imageArray?.map((item, index) => (
            <img key={index} src={item} alt="slideImg" />
          ))}
        </SlideBox>
      </SlideContainer>
      <PrevNextBtn
        className="prev"
        onClick={(e) => {
          goPrev(e);
        }}
      >
        {"<"}
      </PrevNextBtn>
      <PrevNextBtn
        className="next"
        onClick={(e) => {
          goNext(e);
        }}
      >
        {">"}
      </PrevNextBtn>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 95vw;

  animation: fadein 0.3s;

  & ul,
  li {
    list-style: none;
    padding-left: 4px;
  }
`;

const SlideContainer = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const SlideBox = styled.div`
  display: flex;
  transition: 0.2s;
  & img {
    width: 600px;
    height: 200px;
    border-radius: 5px;
    text-align: center;
  }
`;

const PrevNextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 4vh;
  border-radius: 50%;
  border: 1px solid lightgray;
  color: white;
  font-size: 1.8rem;
  background-color: lightgray;
  position: fixed;
  left: 25%;
  top: 40%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  transition: 0.3s ease-in;

  &.next {
    position: fixed;
    left: 75%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-color: gray;
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
