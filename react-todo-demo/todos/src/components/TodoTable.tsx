import React from "react";
import {TodoRowItem} from "./TodoRowItem";

export const TodoTable:React.FC<{todos: TodoModel[], deleteTodo: Function}> = (props) =>{
  let { todos } = props;
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assigned</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((itemTodo) => {
            return (
              <>
                <TodoRowItem
                  key={itemTodo.rowNumber}
                  rowNumber={itemTodo.rowNumber}
                  rowDescription={itemTodo.rowDescription}
                  rowAssigned={itemTodo.rowAssigned}
                  deleteTodo={props.deleteTodo}
                ></TodoRowItem>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
