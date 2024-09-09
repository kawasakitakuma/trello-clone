import React from "react";
import TaskCards from "./TaskCards";

const TaskCard = () => {
  return (
    <div>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};

export default TaskCard;
