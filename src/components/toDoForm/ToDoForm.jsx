import React, { useReducer } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  background: none;
  margin-left: 35%;
  color: #ffffff;
  padding: 0 10px;
  outline: none;
  font-size: 1.5rem;
  color: antiquewhite;
  ::placeholder {
    color: #ffffff;
  }
`;

const ButtonStyle = styled.button`
  width: 100px;
  height: 40px;
  font-size: 14px;
  background: none;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  color: #ffffff;
  margin-left: 20px;
  &:hover {
    background-color: #ffffff;
    color: #222222;
  }
`;
const ToDolistTextStyle = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 59px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TodoTextStyle = styled.h1`
  font-size: 3rem;
  color: #f2dede;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  letter-spacing: 30px;
`;

const toDoListReducer = (state, action) => {
  if (action.type === "TODO_CHANGE") {
    return action.payload;
  }
};

function ToDoForm({ toDo }) {
  const [toDoForm, dispathToDoForm] = useReducer(toDoListReducer, []);

  const inputOnChange = (event) => {
    event.preventDefault();
    const ToDo = event.target.value;
    dispathToDoForm({ type: "TODO_CHANGE", payload: ToDo });
  };

  const liftingUp = () => {
    const toDoListItem = {
      title: toDoForm,
      id: Math.random().toString(),
    };
    toDo(toDoListItem);
  };
  return (
    <>
      <ToDolistTextStyle>
        <TodoTextStyle>Todo:{""}</TodoTextStyle>
      </ToDolistTextStyle>
      <InputStyle
        onChange={inputOnChange}
        type="text"
        placeholder="Enter todo..."
      />
      <ButtonStyle onClick={liftingUp}>ADD</ButtonStyle>
    </>
  );
}

export default ToDoForm;
