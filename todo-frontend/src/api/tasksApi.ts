import { Task } from "../types/Task";

const API_URL = "http://localhost:3000";

export async function fetchAllTasks(): Promise<Task[]> {
  const res = await fetch(`${API_URL}/tasks`);
  if (!res.ok) {
    throw new Error(`Не удалось получить список задач: ${res.statusText}`);
  }
  return res.json();
}

export async function createTask(taskData: Omit<Task, "id">): Promise<Task> {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (!res.ok) {
    throw new Error(`Не удалось создать задачу: ${res.statusText}`);
  }
  return res.json();
}

export async function updateTask(task: Task): Promise<Task> {
  const res = await fetch(`${API_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: task.title,
      description: task.description,
      status: task.status,
    }),
  });
  if (!res.ok) {
    throw new Error(`Не удалось обновить задачу: ${res.statusText}`);
  }
  return res.json();
}

export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(`Не удалось удалить задачу: ${res.statusText}`);
  }
}
