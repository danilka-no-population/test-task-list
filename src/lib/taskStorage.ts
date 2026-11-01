import type { Task } from '../types'

const TASKS_STORAGE_KEY = 'test-task-list.tasks.v1'

function isTask(value: unknown): value is Task {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const task = value as Record<string, unknown>

  return (
    typeof task.id === 'string' &&
    task.id.trim().length > 0 &&
    typeof task.title === 'string' &&
    task.title.trim().length > 0 &&
    typeof task.completed === 'boolean'
  )
}

export function loadTasks(): Task[] {
  try {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)

    if (!storedTasks) {
      return []
    }

    const parsedTasks: unknown = JSON.parse(storedTasks)

    if (!Array.isArray(parsedTasks)) {
      return []
    }

    return parsedTasks.filter(isTask).map((task) => ({
      id: task.id,
      title: task.title.trim(),
      completed: task.completed,
    }))
  } catch {
    return []
  }
}

export function saveTasks(tasks: Task[]): void {
  try {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
  } catch {
    return
  }
}
