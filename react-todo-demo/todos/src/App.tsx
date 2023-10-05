import "./App.css";
import {TodoTable} from "./components/TodoTable";
import React, { useState } from "react";
import {NewTodoForm} from "./components/NewTodoForm";

export const App = () => {
  const [isShowAddTodoForm, setIsShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "User 1" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User 3" },
  ]);

  const addTodo = (assigned : string, description:string) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos[todos.length - 1].rowNumber + 1,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos((todos) => [...todos, newTodo]);
    } else {
      const newTodo = {
        rowNumber: 1,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(
      (todoItem) => todoItem.rowNumber !== deleteTodoRowNumber
    );
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsShowAddTodoForm(!isShowAddTodoForm);
            }}
          >
            {!isShowAddTodoForm ? "Open new todo form" : "Close new todo form"}
          </button>
          {isShowAddTodoForm && <NewTodoForm addTodo={addTodo}></NewTodoForm>}
        </div>
      </div>
    </div>
  );
}

