import React from "react";
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useTaskForm } from "../hooks/useTaskForm";
import { TaskFormProps } from "../types/Task";

const TaskForm: React.FC<TaskFormProps> = (props) => {
  const {
    title,
    description,
    status,
    setTitle,
    setDescription,
    setStatus,
    handleSubmit,
  } = useTaskForm(props);

  const { editingTask, onCancelEdit } = props;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
    >
      <TextField
        label="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="status-label">Статус</InputLabel>
        <Select
          labelId="status-label"
          label="Статус"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="pending">pending</MenuItem>
          <MenuItem value="in progress">in progress</MenuItem>
          <MenuItem value="completed">completed</MenuItem>
        </Select>
        <FormHelperText>
          Например: "pending", "in progress", "completed"
        </FormHelperText>
      </FormControl>

      <Box display="flex" justifyContent="flex-start" gap={2}>
        <Button variant="contained" type="submit">
          {editingTask ? "Обновить" : "Добавить"}
        </Button>
        {editingTask && onCancelEdit && (
          <Button variant="outlined" color="inherit" onClick={onCancelEdit}>
            Отмена
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TaskForm;
