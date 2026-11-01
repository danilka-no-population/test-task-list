import type { Filter } from '../types'

const FILTER_STORAGE_KEY = 'test-task-list.filter.v1'

function isFilter(value: unknown): value is Filter {
  return value === 'all' || value === 'active' || value === 'completed'
}

export function loadFilter(): Filter {
  try {
    const storedFilter = localStorage.getItem(FILTER_STORAGE_KEY)

    return isFilter(storedFilter) ? storedFilter : 'all'
  } catch {
    return 'all'
  }
}

export function saveFilter(filter: Filter): void {
  try {
    localStorage.setItem(FILTER_STORAGE_KEY, filter)
  } catch {
    return
  }
}
