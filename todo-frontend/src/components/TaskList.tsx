import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";
import { TaskListProps } from "../types/Task";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
