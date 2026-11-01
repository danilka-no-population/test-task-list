import './App.css'

function App() {
  return (
    <main className="app">
      <section
        className="task-card task-card--empty"
        aria-labelledby="app-title"
      >
        <header className="app-header">
          <div className="app-header__top">
            <div className="brand">
              <span className="brand__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6.5 12.5 3.5 3.5 7.5-8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="brand__name">Мои задачи</span>
            </div>

            <span className="progress-pill">
              <span className="progress-pill__label">Готово</span>
              <span className="progress-pill__value">0 / 0</span>
            </span>
          </div>

          <h1 id="app-title">Что важно сегодня?</h1>
          <p className="app-header__subtitle">
            Соберите дела в одном месте и отмечайте то, что уже сделано.
          </p>
        </header>

        <div className="app-content">
          <form
            className="task-composer"
            onSubmit={(event) => event.preventDefault()}
          >
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
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="task-composer__button-label">Добавить</span>
            </button>
          </form>

          <div className="filters" role="group" aria-label="Фильтр задач">
            <button
              className="filter-button"
              type="button"
              aria-pressed="true"
            >
              Все
            </button>
            <button
              className="filter-button"
              type="button"
              aria-pressed="false"
            >
              Активные
            </button>
            <button
              className="filter-button"
              type="button"
              aria-pressed="false"
            >
              Выполнено
            </button>
          </div>

          <section className="task-area" aria-label="Список задач">
            <div className="empty-state">
              <svg
                className="empty-state__art"
                viewBox="0 0 96 96"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="empty-check-gradient"
                    x1="28"
                    y1="24"
                    x2="70"
                    y2="74"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7f70f8" />
                    <stop offset="1" stopColor="#5d4fdf" />
                  </linearGradient>
                </defs>
                <circle cx="48" cy="48" r="42" fill="#f3f1ff" />
                <circle
                  cx="48"
                  cy="48"
                  r="40.5"
                  stroke="#e8e4ff"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="30.5"
                  fill="url(#empty-check-gradient)"
                />
                <path
                  d="m37 48.5 7.3 7.3L60 39.5"
                  stroke="#ffffff"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M75.5 24c0 3.7-1.8 5.5-5.5 5.5 3.7 0 5.5 1.8 5.5 5.5 0-3.7 1.8-5.5 5.5-5.5-3.7 0-5.5-1.8-5.5-5.5Z"
                  fill="#c9c2ff"
                />
                <circle cx="20.5" cy="63" r="3" fill="#ddd8ff" />
              </svg>

              <h2 className="empty-state__title">Пока здесь пусто</h2>
              <p className="empty-state__text">
                Добавьте первую задачу — и начните с одного небольшого шага.
              </p>
            </div>
          </section>
        </div>

        <footer className="app-footer">
          <span className="footer-status">Осталось: 0</span>
          <span className="footer-note">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="5"
                y="10"
                width="14"
                height="10"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M8 10V8a4 4 0 0 1 8 0v2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span>Сохраняется в браузере</span>
          </span>
        </footer>
      </section>
    </main>
  )
}

export default App
