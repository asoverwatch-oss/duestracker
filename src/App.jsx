import DuesDashboard from './components/DuesDashboard'
import PasswordGate from './components/PasswordGate'

export default function App() {
  return (
    <PasswordGate>
      <DuesDashboard />
    </PasswordGate>
  )
}
