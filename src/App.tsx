import { useState } from 'react'
import './App.css'
import { AppFooter } from './components/layout/AppFooter'
import { AppHeader } from './components/layout/AppHeader'
import { EmptyState } from './components/task/EmptyState'
import { FilterTabs } from './components/task/FilterTabs'
import { TaskComposer } from './components/task/TaskComposer'
import { TaskList } from './components/task/TaskList'
import type { Filter, Task } from './types'

const EMPTY_STATE_DEFAULT = {
  title: 'Пока здесь пусто',
  description: 'Добавьте первую задачу — и начните с одного небольшого шага.',
}

const EMPTY_STATE_ACTIVE = {
  title: 'Все задачи выполнены',
  description: 'Отличная работа! Самое время немного отдохнуть.',
}

const EMPTY_STATE_COMPLETED = {
  title: 'Пока нет выполненных задач',
  description: 'Отметьте задачу выполненной, и она появится здесь.',
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const completedCount = tasks.filter((task) => task.completed).length
  const remainingCount = tasks.length - completedCount
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }

    if (filter === 'completed') {
      return task.completed
    }

    return true
  })
  const emptyStateContent =
    tasks.length === 0
      ? EMPTY_STATE_DEFAULT
      : filter === 'active'
        ? EMPTY_STATE_ACTIVE
        : filter === 'completed'
          ? EMPTY_STATE_COMPLETED
          : EMPTY_STATE_DEFAULT

  const handleAddTask = (title: string) => {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, task])
  }

  const handleToggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleDeleteTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    )
  }

  return (
    <main className="app">
      <section className="task-card" aria-labelledby="app-title">
        <AppHeader completed={completedCount} total={tasks.length} />

        <div className="app-content">
          <TaskComposer onAdd={handleAddTask} />
          <FilterTabs activeFilter={filter} onChange={setFilter} />

          <section className="task-area" aria-label="Список задач">
            {tasks.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <EmptyState isHidden />
                {filteredTasks.length > 0 ? (
                  <TaskList
                    tasks={filteredTasks}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                  />
                ) : (
                  <EmptyState
                    title={emptyStateContent.title}
                    description={emptyStateContent.description}
                  />
                )}
              </>
            )}
          </section>
        </div>

        <AppFooter remaining={remainingCount} />
      </section>
    </main>
  )
}

export default App
