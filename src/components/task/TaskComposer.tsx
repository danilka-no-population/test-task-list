import type { FormEvent } from 'react'
import { PlusIcon } from '../ui/icons'

export type TaskComposerProps = {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

export function TaskComposer({ onSubmit }: TaskComposerProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(event)
  }

  return (
    <form className="task-composer" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-input">
        Название задачи
      </label>
      <input
        className="task-composer__input"
        id="task-input"
        type="text"
        placeholder="Что нужно сделать?"
        autoComplete="off"
        enterKeyHint="done"
      />
      <button
        className="task-composer__button"
        type="submit"
        aria-label="Добавить задачу"
      >
        <PlusIcon />
        <span className="task-composer__button-label">Добавить</span>
      </button>
    </form>
  )
}
