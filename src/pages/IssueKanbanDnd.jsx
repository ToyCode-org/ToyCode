import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getIssues } from "../redux/slice/issueSlice";
import { useEffect, useState } from "react";
import { KanbanBox } from "../components/issueKanban/KanbanBox";
import { IssueForm } from "../components/issueKanban/IssueForm";

export const IssueKanbanDnd = () => {
  const dispatch = useDispatch();
  const { issue, lastSortId } = useSelector((state) => state.issueSlice);

  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  const [issueData, setIssueData] = useState([]);

  let newIssueArr = [
    issueData?.filter((item) => item.status === "todo"),
    issueData?.filter((item) => item.status === "working"),
    issueData?.filter((item) => item.status === "done"),
  ];

  const initDndStatus = {
    startId: 0,
    endId: 0,
    startSortId: 0,
    endSortId: lastSortId + 1,
    position: null,
    isDragOver: false,
    startStatus: "",
    endStatus: "",
  };
  const [dndStatus, setDndStatus] = useState(initDndStatus);
  const [dndFormData, setDndFormData] = useState({});
  useEffect(() => {
    setIssueData(issue);
    setDndStatus((prev) => ({ ...prev, endSortId: lastSortId + 1 }));
  }, [issue, lastSortId]);

  return (
    <Container>
      <IssueForm lastSortId={lastSortId} />
      <IssueBoxWrap>
        {newIssueArr?.map((item, index) => {
          return (
            <KanbanBox
              key={index}
              KanbanStatus={index}
              boxData={item}
              dndStatus={dndStatus}
              setDndStatus={setDndStatus}
              dndFormData={dndFormData}
              setDndFormData={setDndFormData}
              initDndStatus={initDndStatus}
            />
          );
        })}
      </IssueBoxWrap>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  animation: fadein 0.3s;

  & button {
    width: max-content;
  }
`;

const IssueBoxWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
