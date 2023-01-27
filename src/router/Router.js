import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { IssueKanbanDnd } from "../pages/IssueKanbanDnd";
import { Pagenation } from "../pages/Pagenation";
import { InfiScroll } from "../pages/InfiScroll";
import { SlideShow } from "../pages/SlideShow";
import { InfiSlideShow } from "../pages/infiSlideShow";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dndkanban" element={<IssueKanbanDnd />} />
      <Route path="/pagenation" element={<Pagenation />} />
      <Route path="/infiscroll" element={<InfiScroll />} />
      <Route path="/slideshow" element={<SlideShow />} />
      <Route path="/infislideshow" element={<InfiSlideShow />} />
    </Routes>
  );
};
