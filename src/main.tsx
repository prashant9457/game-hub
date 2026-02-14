import { Provider } from "@/components/ui/provider"
import { ColorModeProvider } from "./components/ui/color-mode"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider defaultTheme="light">
      <Provider >
        <App />
      </Provider>    
    </ColorModeProvider>
  </React.StrictMode>,
)
