import sqlite3 from 'sqlite3'
import path from 'path'

const dbPath = process.env.DB_PATH || './tasks.db'

const sqlite = sqlite3.verbose()
const db = new sqlite.Database(
  path.resolve(dbPath),
  (err: Error | null) => {
    if (err) {
      console.error('Ошибка при подключении к SQLite:', err.message)
    } else {
      console.log('Подключение к SQLite успешно')
    }
  }
)

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT
    )
  `, (err: Error | null) => {
    if (err) {
      console.error('Ошибка при создании таблицы:', err.message)
    } else {
      console.log('Таблица tasks проверена/создана')
    }
  })
})

export default db
