import { Request, Response, NextFunction } from 'express'

interface AppError extends Error {
  status?: number
}

export function errorHandler(err: AppError, req: Request, res: Response, next: NextFunction) {
  console.error(`[ERROR] ${err.message}`)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  })
}
