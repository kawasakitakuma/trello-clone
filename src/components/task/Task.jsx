import React from "react";

const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        {/* //fontawesomeのアイコンが表示されない */}
        <i class="fa-solid fa-trash-can"></i>
        削除
      </button>
    </div>
  );
};

export default Task;
