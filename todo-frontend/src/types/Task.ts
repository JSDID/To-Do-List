export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface TaskFormProps {
  editingTask: Task | null;
  onSave: (taskData: Omit<Task, "id">) => void;
  onUpdate: (updatedTask: Task) => void;
  onCancelEdit?: () => void;
}

export interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}