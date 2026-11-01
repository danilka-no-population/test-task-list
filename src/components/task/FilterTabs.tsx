import './FilterTabs.css'
import type { Filter } from '../../types'

const FILTER_OPTIONS: readonly { value: Filter; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполнено' },
]

export type FilterTabsProps = {
  activeFilter: Filter
  onChange?: (filter: Filter) => void
}

export function FilterTabs({ activeFilter, onChange }: FilterTabsProps) {
  return (
    <div className="filters" role="group" aria-label="Фильтр задач">
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option.value}
          className="filter-button"
          type="button"
          aria-pressed={activeFilter === option.value}
          onClick={() => onChange?.(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
