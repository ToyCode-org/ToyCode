import styled from "styled-components";
import { dndEvent } from "../../util/dndEvent";
import { useDispatch } from "react-redux";

export const Card = ({
  cardData,
  dndStatus,
  setDndStatus,
  dndFormData,
  setDndFormData,
  initDndStatus,
}) => {
  const dispatch = useDispatch();
  return (
    <Container
      draggable
      onDragStart={(e) =>
        dndEvent.dragStart(e, cardData, setDndStatus, setDndFormData)
      }
      onDragOver={dndEvent.dragOver}
      onDrop={(e) => dndEvent.drop(e, cardData, setDndStatus)}
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
      <ContentWrap>
        <CardTop>
          <div>{cardData?.id}</div>
          <div>{cardData?.status}</div>
        </CardTop>
        <div>
          <div>{cardData?.title}</div>
          <div>{cardData?.content}</div>
        </div>
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10px 0 10px;
  display: flex;
  width: 25vw;
  min-height: 77px;
  border: 1px solid gray;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
