import db from '../config/db'

export interface TaskRow {
  id: number
  title: string
  description: string
  status: string
}

const taskModel = {
  createTask(title: string, description: string, status: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO tasks (title, description, status)
        VALUES (?, ?, ?)
      `
      db.run(sql, [title, description, status], function (this: any, err: Error) {
        if (err) {
          reject(err)
        } else {
          resolve(this.lastID)
        }
      })
    })
  },

  getAllTasks(): Promise<TaskRow[]> {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM tasks', (err, rows: TaskRow[]) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  },

  getTaskById(id: number): Promise<TaskRow | undefined> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row: TaskRow) => {
        if (err) {
          reject(err)
        } else {
          resolve(row)
        }
      })
    })
  },

  updateTask(id: number, title: string, description: string, status: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const sql = `
        UPDATE tasks
        SET title = ?, description = ?, status = ?
        WHERE id = ?
      `
      db.run(sql, [title, description, status, id], function (this: any, err: Error) {
        if (err) {
          reject(err)
        } else {
          resolve(this.changes)
        }
      })
    })
  },

  deleteTask(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM tasks WHERE id = ?', [id], function (this: any, err: Error) {
        if (err) {
          reject(err)
        } else {
          resolve(this.changes)
        }
      })
    })
  }
}

export default taskModel
