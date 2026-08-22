import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Employee from './Employee.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Employee />
//   </StrictMode>,
// )
import Admin from './Admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admin />
  </StrictMode>,
)
// import Landing from './Landing.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Landing />
//   </StrictMode>,
// )
