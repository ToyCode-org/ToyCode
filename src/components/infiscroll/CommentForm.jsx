import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../redux/slice/commentSlice";

export const CommentForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const formDataInit = {
    title: "",
    content: "",
  };

  const onChangeHandler = (e) => {
    let type = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [type]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addComments(formData));
    setFormData(formDataInit);
  };

  return (
    <Container onSubmit={onSubmitHandler}>
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
      <SubmitButton>Add Commenet</SubmitButton>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  justify-content: center;
  & input {
    width: 15vw;
  }
`;

const SubmitButton = styled.button`
  height: 40px;
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  color: white;
  background-color: black;
  cursor: pointer;
`;
