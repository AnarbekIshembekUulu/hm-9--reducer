import { useReducer, useEffect } from "react";
import "./App.css";
import ToDoForm from "./components/toDoForm/ToDoForm";
import ToDoRender from "./components/toDoRender/ToDoRender";

const toDoListReducer = (state, action) => {
  if (action.type === "TODO_LIST_ITEM") {
    return [...state, action.payload];
  }
  if (action.type === "DELETE_CHANGE") {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (action.type === "SAVE-NEW-TODOLIST") {
    console.log("eeeee", state);
    let editToDo = [...state].map((oldToDo) => {
      if (oldToDo.id === action.payload.id) {
        oldToDo.title = action.payload.value;
      }
      return oldToDo;
    });
    console.log("tttttt", editToDo);
    return editToDo;
  }
};

function App() {
  const [todoListValue, dispathTodo] = useReducer(
    toDoListReducer,
    JSON.parse(localStorage.getItem("todo"))
  );
  // console.log("app", todoListValue);

  const toDo = (data) => {
    dispathTodo({ type: "TODO_LIST_ITEM", payload: data });
    console.log(data);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoListValue));
  }, [todoListValue]);

  return (
    <>
      <ToDoForm toDo={toDo} todoListValue={todoListValue}></ToDoForm>
      <ToDoRender
        toDo={toDo}
        dispathTodo={dispathTodo}
        todoListValue={todoListValue}
      ></ToDoRender>
    </>
  );
}

export default App;
