import { configureStore } from "@reduxjs/toolkit";
import issueSlice from "./slice/issueSlice";
import commentSlice from "./slice/commentSlice";

const store = configureStore({
  reducer: {
    issueSlice,
    commentSlice,
  },
});
export default store;
