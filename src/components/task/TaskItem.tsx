import './TaskItem.css'
import type { Task } from '../../types'

export type TaskItemProps = {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li className="task-item">
      <span className="task-item__marker" aria-hidden="true" />
      <span className="task-item__title">{task.title}</span>
    </li>
  )
}
