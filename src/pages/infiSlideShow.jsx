import styled from "styled-components";
import { useState, useEffect } from "react";

export const InfiSlideShow = () => {
  let imageArray = [
    require("../image/cookiezip.png"),
    require("../image/jjapTube0.png"),
    require("../image/jjapTube1.png"),
    require("../image/safePet.png"),
  ];

  // 가짜 이미지를 포함한 전체 배열 길이
  // 좌우로 이동할 길이
  let imageArrLength = imageArray?.length + 2;
  let indexRight = 600;

  // 현재 이미지 number
  // 현재 idx(x축 위치)
  // transition 시간 초기화
  const [imageNum, setImageNum] = useState(1);
  const [indexPx, setIndexPx] = useState(0);
  const [indexInit, setIndexInit] = useState(0.1);

  // 상세페이지 호출시 첫 번째 사진 위치로 이동
  useEffect(() => {
    setTimeout(() => {
      setIndexPx(indexPx - indexRight);
    }, 300);
  }, []);

  // 첫 번째 사진이 아니면 이전 사진으로 이동
  const goPrev = (e) => {
    e.stopPropagation();
    if (imageNum !== 1) {
      setImageNum(imageNum - 1);
      setIndexPx(indexPx + indexRight);
    } else {
      setImageNum(imageArrLength - 2);
      setIndexPx(indexPx + indexRight);
      // 가짜 이미지로 이동하는 모션 적용
      // transition 시간을 0으로 바꾸고 기존 이미지 배열로 이동
      setTimeout(() => {
        setIndexInit(0);
        setIndexPx(indexRight * (-imageArrLength + 2));
        setIndexInit(0.1);
      }, 300);
    }
  };

  // 마지막 사진이 아니면 처음 사진으로 이동
  const goNext = (e) => {
    e.stopPropagation();
    if (imageNum !== imageArrLength - 2) {
      setImageNum(imageNum + 1);
      setIndexPx(indexPx - indexRight);
    } else {
      setImageNum(1);
      setIndexPx(indexPx - indexRight);
      // 가짜 이미지로 이동하는 모션 적용
      // transition 시간을 0으로 바꾸고 기존 이미지 배열로 이동
      setTimeout(() => {
        setIndexInit(0);
        setIndexPx(indexRight * -1);
        setIndexInit(0.1);
      }, 200);
    }
  };

  return (
    <Container>
      <SlideContainer onClick={(e) => e.stopPropagation()}>
        <SlideBox
          style={{
            width: `${imageArrLength * indexRight}px`,
            transform: `translateX(${indexPx}px)`,
            transition: `${indexInit}s`,
          }}
        >
          <img src={imageArray[imageArray.length - 1]} alt="cloneEnd" />
          {imageArray?.map((item, index) => (
            <img key={index} src={item} alt="slideImg" />
          ))}
          <img src={imageArray[0]} alt="cloneStart" />
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
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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
