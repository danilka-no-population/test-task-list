import '../../styles/layout/AppFooter.css'
import { LockIcon } from '../ui/icons'

export type AppFooterProps = {
  remaining: number
}

export function AppFooter({ remaining }: AppFooterProps) {
  return (
    <footer className="app-footer">
      <span className="footer-status">Осталось: {remaining}</span>
      <span className="footer-note">
        <LockIcon />
        <span>Сохраняется в браузере</span>
      </span>
    </footer>
  )
}
