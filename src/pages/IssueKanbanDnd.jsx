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
  }, []);

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
    endSortId: issueData[issueData?.length - 1]?.sortId + 1,
    position: null,
    isDragOver: false,
    startStatus: "",
    endStatus: "",
  };
  const [dndStatus, setDndStatus] = useState(initDndStatus);
  const [dndFormData, setDndFormData] = useState({});
  useEffect(() => {
    setIssueData(issue);
  }, [issue, dndStatus]);

  return (
    <Container>
      <p>이슈 칸반 DND 입니다.</p>
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 95vw;
  & button {
    width: max-content;
  }
`;

const IssueBoxWrap = styled.div`
  margin-top: 30px;
  display: flex;
  width: 30vw;
`;
