import { updateIssues } from "../redux/slice/issueSlice";

export const dragFunction = (e, type) => {
  e.preventDefault();
  e.stopPropagation();
};

export const dndEvent = {
  // 카드용
  dragStart: (e, cardData, setDndStatus, setDndFormData) => {
    setDndStatus((prev) => ({
      ...prev,
      startId: cardData.id,
      startSortId: cardData.sortId,
      startStatus: cardData.status,
      formData: cardData,
    }));
    setDndFormData(cardData);
  },
  drag: (e) => {
    dragFunction(e, "drag");
  },
  // 미사용, dnd event 순서 정리용 코드
  // dragEnter: (e, setDndStatus) => {
  //   // dragFunction(e, "dragEnter");
  //   setDndStatus((prev) => ({ ...prev, isDragOver: true }));
  // },
  dragOver: (e) => {
    dragFunction(e, "dragOver");
  },
  drop: (e, cardData, setDndStatus) => {
    dragFunction(e, "drop");
    setDndStatus((prev) => ({
      ...prev,
      endId: cardData.id,
      endSortId: cardData.sortId,
      endStatus: cardData.status,
      isDragOver: true,
    }));
  },
  // 미사용, dnd event 순서 정리용 코드
  // dragLeave: (e, setDndStatus) => {
  //   dragFunction(e, "dragLeave");
  //   setDndStatus((prev) => ({ ...prev, isDragOver: false }));
  // },
  dragEnd: (
    e,
    dndFormData,
    dndStatus,
    setDndStatus,
    initDndStatus,
    dispatch
  ) => {
    dragFunction(e, "dragEnd");
    let newFormData = {
      ...dndFormData,
      sortId:
        dndStatus.endId === 0 ? dndStatus.endSortId : dndStatus.endSortId - 0.1,
      status: dndStatus.endStatus,
    };
    if (dndStatus.isDragOver) dispatch(updateIssues(newFormData));
    setDndStatus(initDndStatus);
  },

  // 박스용
  dragOverBox: (e) => {
    dragFunction(e, "dragOverBox");
  },
  dropBox: (e, thisKanbanStatus, setDndStatus) => {
    dragFunction(e, "dropBox");
    setDndStatus((prev) => ({
      ...prev,
      endStatus: thisKanbanStatus,
      isDragOver: true,
    }));
  },
};

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// 마우스 이벤트 참고용
export const mouseEvent = {
  onMouseDown: (e) => {
    console.log(e);
    let thisCard = e.target;

    let shiftX = e.clientX - thisCard.getBoundingClientRect().left;
    let shiftY = e.clientY - thisCard.getBoundingClientRect().top;

    thisCard.style.position = "absolute";
    thisCard.style.zIndex = 1000;
    document.body.append(thisCard);

    moveAt(e.pageX, e.pageY);

    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 공을 이동합니다.
    function moveAt(pageX, pageY) {
      thisCard.style.left = pageX - shiftX + "px";
      thisCard.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // mousemove로 공을 움직입니다.
    document.addEventListener("mousemove", onMouseMove);

    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    thisCard.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      thisCard.onmouseup = null;
    };
  },

  onDragStart: () => {
    return false;
  },
};
