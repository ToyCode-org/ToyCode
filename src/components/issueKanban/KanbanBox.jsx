import styled from "styled-components";
import { Card } from "./Card";
import { dndEvent } from "../../util/dndEvent";
import { useDispatch } from "react-redux";

export const KanbanBox = ({
  KanbanStatus,
  boxData,
  dndStatus,
  setDndStatus,
  dndFormData,
  setDndFormData,
  initDndStatus,
}) => {
  const dispatch = useDispatch();
  const thisKanbanStatus =
    KanbanStatus === 0 ? "todo" : KanbanStatus === 1 ? "working" : "done";

  return (
    <Container
      // onDragEnter={(e) => dndEvent.dragEnter(e, setDndStatus)}
      onDragOver={dndEvent.dragOver}
      onDrop={(e) => dndEvent.dropBox(e, thisKanbanStatus, setDndStatus)} // box의 drop을 거치지 않고 카드의 end 이벤트로 끝남
      // onDragLeave={(e) => dndEvent.dragLeave(e, setDndStatus)}
      onDragEnd={(e) =>
        dndEvent.dragEnd(
          e,
          dndFormData,
          dndStatus,
          setDndStatus,
          initDndStatus,
          dispatch
        )
      }
    >
      <p>{thisKanbanStatus}</p>
      <CardBox>
        {boxData?.map((item, index) => {
          return (
            <Card
              key={index}
              cardData={item}
              dndStatus={dndStatus}
              setDndStatus={setDndStatus}
              dndFormData={dndFormData}
              setDndFormData={setDndFormData}
              initDndStatus={initDndStatus}
            />
          );
        })}
      </CardBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30vw;
  width: 30vw;
  min-height: 600px;
  height: 600px;
  border: 1px solid black;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 50vh;
  overflow-y: auto;
`;
