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

  const slideButtons = [
    {
      name: "prev",
      handler: (e) => {
        goPrev(e);
      },
      icon: "◀",
    },
    {
      name: "next",
      handler: (e) => {
        goNext(e);
      },
      icon: "▶",
    },
  ];

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
        {slideButtons.map((item, index) => {
          const { name, handler, icon } = item;
          return (
            <PrevNextBtn key={index} className={name} onClick={handler}>
              {icon}
            </PrevNextBtn>
          );
        })}
        <NumBox>
          <span>{`${imageNum + 1} / ${imageArrLength}`}</span>
          {slideButtons.map((item, index) => {
            const { name, handler, icon } = item;
            return (
              <SubPrevNextBtn key={index} className={name} onClick={handler}>
                {icon}
              </SubPrevNextBtn>
            );
          })}
        </NumBox>
      </SlideContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 95vw;
  animation: slideFadein 0.3s;

  @keyframes slideFadein {
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
  user-select: none;
  -webkit-user-select: none;
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
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 40px;
  border-radius: 15%;
  border: none;
  color: #c4c4c4;
  font-size: 1.8rem;
  background-color: transparent;
  position: absolute;
  left: 5%;
  top: 48%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.2s ease-in;

  &.next {
    position: fixed;
    left: 95%;
    top: 48%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    color: black;
    background-color: lightgray;
  }
  &:active {
    transition: 0.1s;
    color: white;
  }
`;

const NumBox = styled.div`
  padding: 0 5px 0 5px;
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
  font-size: 13px;
  font-weight: bold;
`;

const SubPrevNextBtn = styled.span`
  margin-left: 5px;
  transition: 0.2s;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #696969;
  }
  &:active {
    background-color: white;
  }
`;
