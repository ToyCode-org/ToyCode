import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIssues } from "../../redux/slice/issueSlice";

export const IssueForm = ({ lastSortId }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    sortId: lastSortId + 1,
    title: "",
    content: "",
    status: "todo",
  });
  const formDataInit = {
    sortId: lastSortId + 1,
    title: "",
    content: "",
    status: "todo",
  };

  const onChangeHandler = (e) => {
    let type = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [type]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addIssues(formData));
    setFormData(formDataInit);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder={"제목"}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <br />
      <input
        type="text"
        name="content"
        value={formData.content}
        placeholder={"내용"}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <br />
      <button>이슈추가</button>
    </form>
  );
};
