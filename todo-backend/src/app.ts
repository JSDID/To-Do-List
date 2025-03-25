import express, { Application } from 'express'
import cors from 'cors'
import taskRoutes from './routes/taskRoutes'
import { errorHandler } from './middleware/errorHandler'
import { notFoundHandler } from './middleware/notFoundHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use('/tasks', taskRoutes)

app.use(notFoundHandler)

app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('Сервер запущен. Для работы с задачами используйте /tasks.')
})

export default app
