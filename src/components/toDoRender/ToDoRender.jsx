import React from "react";
import ToDoItem from "../todo-item/ToDoItem";

function ToDoRender({ todoListValue, toDo, dispathTodo }) {
  console.log(todoListValue);
  return todoListValue.map((elem) => {
    return (
      <ToDoItem
        toDo={toDo}
        todoListValue={todoListValue}
        dispathTodo={dispathTodo}
        title={elem.title}
        id={elem.id}
        elem={elem}
      />
    );
  });
}

export default ToDoRender;
