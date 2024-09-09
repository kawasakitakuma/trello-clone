import React from "react";

const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        {/* //fontawesomeのアイコンが表示されない */}
        <i class="fa-solid fa-trash-can"></i>
        削除
      </button>
    </div>
  );
};

export default Task;
