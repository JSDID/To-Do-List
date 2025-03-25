import { Request, Response } from 'express'
import taskService from '../services/taskService'

export async function createTask(req: Request, res: Response) {
  try {
    const { title, description, status } = req.body
    const newTask = await taskService.createTask(title, description, status)
    return res.status(201).json(newTask)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }
}

export async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await taskService.getAllTasks()
    return res.json(tasks)
  } catch (err: any) {
    return res.status(500).json({ error: err.message })
  }
}

export async function getTaskById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    const task = await taskService.getTaskById(id)
    if (!task) {
      return res.status(404).json({ error: 'Задача не найдена' })
    }
    return res.json(task)
  } catch (err: any) {
    return res.status(500).json({ error: err.message })
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    const { title, description, status } = req.body
    const updated = await taskService.updateTask(id, title, description, status)
    return res.json(updated)
  } catch (err: any) {
    if (err.message === 'Задача не найдена') {
      return res.status(404).json({ error: err.message })
    }
    return res.status(400).json({ error: err.message })
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)
    const result = await taskService.deleteTask(id)
    return res.json(result)
  } catch (err: any) {
    if (err.message === 'Задача не найдена') {
      return res.status(404).json({ error: err.message })
    }
    return res.status(500).json({ error: err.message })
  }
}
