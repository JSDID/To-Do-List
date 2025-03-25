import { Container, Typography } from "@mui/material";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TasksPage() {
  const {
    tasks,
    editingTask,
    handleSave,
    handleUpdate,
    handleDelete,
    handleEditTask,
    handleCancelEdit,
  } = useTasks();

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Список задач
      </Typography>

      <TaskForm
        editingTask={editingTask}
        onSave={handleSave}
        onUpdate={handleUpdate}
        onCancelEdit={handleCancelEdit}
      />

      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDelete}
      />
    </Container>
  );
}

export default TasksPage;
