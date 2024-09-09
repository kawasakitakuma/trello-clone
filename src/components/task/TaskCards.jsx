import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCaradButton from "./button/AddTaskCardButton";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: 0, draggableId: "item0" },
  ]);

  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCardList) => (
        <TaskCard key={taskCardList.id} />
      ))}
      <AddTaskCaradButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};

export default TaskCards;
