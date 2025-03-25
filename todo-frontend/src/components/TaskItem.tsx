import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskItemProps } from "../types/Task";

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" onClick={() => onEdit(task)} sx={{ mr: 1 }}>
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="error"
            onClick={() => onDelete(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={`${task.title} [${task.status}]`}
        secondary={task.description}
      />
    </ListItem>
  );
};

export default TaskItem;
