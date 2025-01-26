import { renderToString } from 'react-dom/server'
import App from './pages/main/App.tsx'

export function render() {
	return renderToString(<App />)
}
