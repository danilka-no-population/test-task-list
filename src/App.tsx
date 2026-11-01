import { useState } from 'react'
import './App.css'
import { AppFooter } from './components/layout/AppFooter'
import { AppHeader } from './components/layout/AppHeader'
import { EmptyState } from './components/task/EmptyState'
import { FilterTabs } from './components/task/FilterTabs'
import { TaskComposer } from './components/task/TaskComposer'
import { TaskList } from './components/task/TaskList'
import type { Task } from './types'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const completedCount = tasks.filter((task) => task.completed).length
  const remainingCount = tasks.length - completedCount

  const handleAddTask = (title: string) => {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, task])
  }

  return (
    <main className="app">
      <section className="task-card" aria-labelledby="app-title">
        <AppHeader completed={completedCount} total={tasks.length} />

        <div className="app-content">
          <TaskComposer onAdd={handleAddTask} />
          <FilterTabs activeFilter="all" />

          <section className="task-area" aria-label="Список задач">
            <EmptyState isHidden={tasks.length > 0} />
            {tasks.length > 0 && <TaskList tasks={tasks} />}
          </section>
        </div>

        <AppFooter remaining={remainingCount} />
      </section>
    </main>
  )
}

export default App
