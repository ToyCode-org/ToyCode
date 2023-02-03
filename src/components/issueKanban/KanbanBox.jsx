import styled from "styled-components";
import { useDispatch } from "react-redux";
import { dndEvent } from "../../util/dndEvent";
import { Card } from "./Card";

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
      onDragOver={dndEvent.dragOver}
      onDrop={(e) => dndEvent.dropBox(e, thisKanbanStatus, setDndStatus)}
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
      <p>{thisKanbanStatus.toUpperCase()}</p>
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
  min-width: 25vw;
  width: 25vw;
  min-height: 600px;
  height: 600px;
  border: ${(props) => props.theme.border};
  border-radius: 10px;
  transition: 0.3s;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 50vh;
  overflow-y: auto;
  & .dragging {
    opacity: 0.3;
  }
`;
