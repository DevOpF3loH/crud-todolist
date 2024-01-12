import React from "react";

export const Task = (props) => {
  return (
    <div className="task" style={{ backgroundColor: props.completed ? "lime" : "orangered" }}>
      <button onClick={() => props.completeTask(props.id)}> OK </button>
      <h1>
        {props.id}. {props.taskName}
      </h1>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
    </div>
  );
};
