import React, { useState } from "react";
import styled from "styled-components";
import { MdDoneOutline } from "react-icons/md";

function ToDoItem({ id, title, elem, dispathTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(true);

  const deletechange = (id) => {
    dispathTodo({ type: "DELETE_CHANGE", payload: id });
  };

  function editToDo(id, title) {
    setEdit(id);
    setValue(title);
  }

  const chek = () => {
    setCheck((prev) => !prev);
  };

  const saveToDo = (id, value) => {
    dispathTodo({ type: "SAVE-NEW-TODOLIST", payload: { id, value } });
    setEdit(null);
  };

  return (
    <ToDoListDiv key={id}>
      {edit === id ? (
        <NewToDoSave>
          <InputEdit
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
          />
          <ButtonSave onClick={() => saveToDo(id, value)}>Сохранить</ButtonSave>
        </NewToDoSave>
      ) : (
        <ToDoTextStyled>
          {check ? (
            <TitleStyle>{title}</TitleStyle>
          ) : (
            <TitleStyleC>{title}</TitleStyleC>
          )}
        </ToDoTextStyled>
      )}

      <DivItem>
        <CheckBoxButton onClick={chek}>
          <MdDoneOutline />
        </CheckBoxButton>
        <ButtonDelete onClick={() => deletechange(elem.id)}>
          DELETE
        </ButtonDelete>
        <ButtonEdit onClick={() => editToDo(id, title)}>EDIT</ButtonEdit>
      </DivItem>
    </ToDoListDiv>
  );
}

export default ToDoItem;

const ToDoListDiv = styled.div`
  width: 50%;
  height: 100px;
  border-style: 1px solid whitesmoke;
  background-image: linear-gradient(95deg, #00abfb, #ff2b2b);
  margin-left: 385px;
  padding-top: 30px;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, 0px 15px 12px;
    background-image: linear-gradient(95deg, #ff2b2b, #00abfb);
  }
`;

const ButtonDelete = styled.button`
  margin-right: 20px;
  color: antiquewhite;
  border-style: none;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  background-color: #001f6e;
  &:hover {
    color: antiquewhite;
    background-color: #ff0000;
  }
`;
const ButtonEdit = styled.button`
  background-color: chartreuse;
  border-style: none;
  border-radius: 10px;
  &:hover {
    color: antiquewhite;
    background-color: #000c42;
  }
`;

const DivItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin-right: 30px;
`;
const ToDoTextStyled = styled.div`
  margin-left: 30px;
`;

const NewToDoSave = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 70px;
`;

const InputEdit = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom: 1px solid whitesmoke;
  background: none;
  margin-left: 20px;
  color: #ffffff;
  padding: 0 10px;
  outline: none;
  font-size: 1.2rem;
  ::placeholder {
    color: #ffffff;
  }
`;

const ButtonSave = styled.button`
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
    color: #000000;
  }
`;
const TitleStyleC = styled.h1`
  color: antiquewhite;
  text-decoration: line-through 5px;
  color: black;
`;

const TitleStyle = styled.h1`
  color: antiquewhite;
`;

const CheckBoxButton = styled.button`
  width: 100px;
  margin-right: 20px;
  font-size: 2rem;
  background-color: #ffee00;
  border-style: none;
  color: #000000;
  border-radius: 10px;
  padding-top: 9px;
  :hover {
    color: #ffffff;
  }
`;
