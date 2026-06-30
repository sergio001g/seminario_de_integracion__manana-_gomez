import PrimerComponente from './components/PrimerComponente'
import './App.css'

const PASO = 1

export default function App() {
  const content =
    PASO === 1 ? <PrimerComponente /> : <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return content
}
