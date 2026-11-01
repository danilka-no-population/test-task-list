import { useState } from 'react'
import '../../styles/task/TaskItem.css'
import type { Task } from '../../types'
import { CheckIcon, TrashIcon } from '../ui/icons'

export type TaskItemProps = {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isRemoving, setIsRemoving] = useState(false)

  const handleToggle = () => {
    if (!isRemoving) {
      onToggle(task.id)
    }
  }

  const handleDelete = () => {
    if (isRemoving) {
      return
    }

    setIsRemoving(true)
    window.setTimeout(() => onDelete(task.id), 170)
  }

  return (
    <li
      className={`task-item${task.completed ? ' task-item--completed' : ''}${
        isRemoving ? ' task-item--removing' : ''
      }`}
    >
      <button
        className="task-item__toggle"
        type="button"
        aria-pressed={task.completed}
        onClick={handleToggle}
        title={task.title}
      >
        <span className="task-item__marker" aria-hidden="true">
          <CheckIcon />
        </span>
        <span className="task-item__title">{task.title}</span>
      </button>

      <button
        className="task-item__delete"
        type="button"
        aria-label={`Удалить задачу «${task.title}»`}
        onClick={handleDelete}
      >
        <TrashIcon />
      </button>
    </li>
  )
}
