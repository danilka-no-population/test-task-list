import { useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import './TaskComposer.css'
import { PlusIcon } from '../ui/icons'

export type TaskComposerProps = {
  onAdd: (title: string) => void
}

export function TaskComposer({ onAdd }: TaskComposerProps) {
  const [title, setTitle] = useState('')
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const trimmedTitle = title.trim()
  const isSubmitDisabled = trimmedTitle.length === 0

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!trimmedTitle) {
      return
    }

    onAdd(trimmedTitle)
    setTitle('')
    inputRef.current?.focus()
  }

  return (
    <form className="task-composer" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={inputId}>
        Название задачи
      </label>
      <input
        ref={inputRef}
        className="task-composer__input"
        id={inputId}
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Что нужно сделать?"
        autoComplete="off"
        enterKeyHint="done"
      />
      <button
        className="task-composer__button"
        type="submit"
        aria-label="Добавить задачу"
        disabled={isSubmitDisabled}
      >
        <PlusIcon />
        <span className="task-composer__button-label">Добавить</span>
      </button>
    </form>
  )
}
