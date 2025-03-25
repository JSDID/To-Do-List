import { useState, useEffect } from "react";
import { Task } from "../types/Task";
import {
  fetchAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/tasksApi";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchAllTasks();
      setTasks(data);
    })();
  }, []);

  async function handleSave(taskData: Omit<Task, "id">) {
    const created = await createTask(taskData);
    setTasks((prev) => [...prev, created]);
  }

  async function handleUpdate(updated: Task) {
    const newTask = await updateTask(updated);
    setTasks((prev) => prev.map((t) => (t.id === newTask.id ? newTask : t)));
    setEditingTask(null);
  }

  async function handleDelete(id: number) {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleEditTask(task: Task) {
    setEditingTask(task);
  }

  function handleCancelEdit() {
    setEditingTask(null);
  }

  return {
    tasks,
    editingTask,
    handleSave,
    handleUpdate,
    handleDelete,
    handleEditTask,
    handleCancelEdit,
  };
}
