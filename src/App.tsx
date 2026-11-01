import './App.css'
import { AppFooter } from './components/layout/AppFooter'
import { AppHeader } from './components/layout/AppHeader'
import { EmptyState } from './components/task/EmptyState'
import { FilterTabs } from './components/task/FilterTabs'
import { TaskComposer } from './components/task/TaskComposer'

function App() {
  return (
    <main className="app">
      <section
        className="task-card task-card--empty"
        aria-labelledby="app-title"
      >
        <AppHeader completed={0} total={0} />

        <div className="app-content">
          <TaskComposer />
          <FilterTabs activeFilter="all" />

          <section className="task-area" aria-label="Список задач">
            <EmptyState />
          </section>
        </div>

        <AppFooter remaining={0} />
      </section>
    </main>
  )
}

export default App
