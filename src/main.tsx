
import React from 'react'; // Explicitly import React
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Still importing i18n but it's now our simplified version
import './i18n'

createRoot(document.getElementById("root")!).render(
  <App />
);
