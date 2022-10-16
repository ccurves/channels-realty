import React from "react";
import TaskProgressComponent from "../common/TaskProgressComponent";

const TaskProgress = () => {
  return (
    <div>
      <TaskProgressComponent sqm={150} perc="4" />
      <TaskProgressComponent sqm={300} perc="2" />
      <TaskProgressComponent sqm={600} perc="1" />
    </div>
  );
};

export default TaskProgress;
