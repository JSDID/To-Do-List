import taskModel, { TaskRow } from '../models/taskModel'

const VALID_STATUSES = ['pending', 'in progress', 'completed'] as const

function isValidStatus(status: string): boolean {
  return VALID_STATUSES.includes(status as any)
}

const taskService = {
  async createTask(title: string, description: string, status?: string): Promise<TaskRow> {
    if (!title) {
      throw new Error('Поле "title" обязательно')
    }
    if (!status) {
      status = 'pending'
    }
    if (!isValidStatus(status)) {
      throw new Error('Некорректный статус задачи')
    }

    const newId = await taskModel.createTask(title, description, status)
    const created = await taskModel.getTaskById(newId)
    return created as TaskRow
  },

  async getAllTasks(): Promise<TaskRow[]> {
    return taskModel.getAllTasks()
  },

  async getTaskById(id: number): Promise<TaskRow | undefined> {
    return taskModel.getTaskById(id)
  },

  async updateTask(
    id: number,
    title?: string,
    description?: string,
    status?: string
  ): Promise<TaskRow> {
    const existing = await taskModel.getTaskById(id)
    if (!existing) {
      throw new Error('Задача не найдена')
    }

    const newTitle = title !== undefined ? title : existing.title
    const newDesc = description !== undefined ? description : existing.description
    const newStatus = status !== undefined ? status : existing.status

    if (!newTitle.trim()) {
      throw new Error('Поле "title" не может быть пустым')
    }
    if (!isValidStatus(newStatus)) {
      throw new Error('Некорректный статус задачи')
    }

    await taskModel.updateTask(id, newTitle, newDesc, newStatus)
    const updated = await taskModel.getTaskById(id)
    if (!updated) {
      throw new Error('Что-то пошло не так при обновлении задачи')
    }
    return updated
  },

  async deleteTask(id: number): Promise<{ message: string; id: number }> {
    const existing = await taskModel.getTaskById(id)
    if (!existing) {
      throw new Error('Задача не найдена')
    }
    await taskModel.deleteTask(id)
    return { message: 'Задача удалена', id }
  }
}

export default taskService
