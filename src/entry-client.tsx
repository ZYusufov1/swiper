import { hydrateRoot } from 'react-dom/client'
import App from './pages/main/App.tsx'

hydrateRoot(document.getElementById('app')!, <App />)
