import React, { useState } from "react";

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {
  const [assigned, setAssigned] = useState("");
  const [description, setDescript] = useState("");

  const submitForm = () => {
    if (assigned !== "" && description !== "") {
      props.addTodo(assigned, description);
    }
    setAssigned("");
    setDescript("");
  };
  return (
    <div className="mt-5">
      <form onSubmit={() => submitForm()}>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            className="form-control"
            required
            onChange={e => {setAssigned(e.target.value)}}
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={1}
            required
            onChange={e => {setDescript(e.target.value)}}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitForm}
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

