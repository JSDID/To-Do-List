import { useEffect, useState, FormEvent } from "react";
import { TaskFormProps } from "../types/Task";

export const useTaskForm = ({
  editingTask,
  onSave,
  onUpdate,
  // onCancelEdit,
}: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("pending");
    }
  }, [editingTask]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      onUpdate({ ...editingTask, title, description, status });
    } else {
      onSave({ title, description, status });
    }

    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  return {
    title,
    description,
    status,
    setTitle,
    setDescription,
    setStatus,
    handleSubmit,
  };
};
