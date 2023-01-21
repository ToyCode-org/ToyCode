import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { IssueKanbanDnd } from "../pages/IssueKanbanDnd";
import { RenderTest } from "../pages/RenderTest";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dndkanban" element={<IssueKanbanDnd />} />
      <Route path="/rendertest" element={<RenderTest />} />
    </Routes>
  );
};
