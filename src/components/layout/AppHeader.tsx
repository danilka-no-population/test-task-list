import './AppHeader.css'
import { CheckIcon } from '../ui/icons'

export type AppHeaderProps = {
  completed: number
  total: number
}

export function AppHeader({ completed, total }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__top">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">
            <CheckIcon />
          </span>
          <span className="brand__name">Мои задачи</span>
        </div>

        <span className="progress-pill">
          <span className="progress-pill__label">Готово</span>
          <span className="progress-pill__value">
            {completed} / {total}
          </span>
        </span>
      </div>

      <h1 id="app-title">Что важно сегодня?</h1>
      <p className="app-header__subtitle">
        Соберите дела в одном месте и отмечайте то, что уже сделано.
      </p>

      <p className="app-header__hint">
        <span className="app-header__hint-icon" aria-hidden="true">
          <CheckIcon />
        </span>
        <span>Нажмите на задачу, чтобы отметить её как выполненную</span>
      </p>
    </header>
  )
}
