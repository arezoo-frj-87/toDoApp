import React from "react";

export default function ToDonesContainer({ toDones, updateItem, deleteItem }) {
  /* const {toDones} = props  */
  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {toDones.map((todone) => {
        return (
          <div className="todones-item" key={todone.id}>
            <p>{todone.text}</p>
            <div className="actions">
              <button className="btn" onClick={() => updateItem(todone.id)}>
                {" "}
                &#8635;{" "}
              </button>
              <button className="btn" onClick={() => deleteItem(todone.id)}>
                {" "}
                &#x2718;{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
