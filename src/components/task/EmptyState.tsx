import { useId } from 'react'
import './EmptyState.css'

export type EmptyStateProps = {
  title?: string
  description?: string
  isHidden?: boolean
}

export function EmptyState({
  title = 'Пока здесь пусто',
  description = 'Добавьте первую задачу — и начните с одного небольшого шага.',
  isHidden = false,
}: EmptyStateProps) {
  const gradientId = useId().replace(/:/g, '')

  return (
    <div
      className={`empty-state${isHidden ? ' empty-state--hidden' : ''}`}
      aria-hidden={isHidden || undefined}
    >
      <svg
        className="empty-state__art"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
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
        <circle cx="48" cy="48" r="40.5" stroke="#e8e4ff" />
        <circle cx="48" cy="48" r="30.5" fill={`url(#${gradientId})`} />
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

      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__text">{description}</p>
    </div>
  )
}
