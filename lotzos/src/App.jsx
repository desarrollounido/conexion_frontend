import './App.css'
import { Route, Routes } from 'react-router-dom'
import './styles/estilosGlobales.css'
import UsuariosPage from './pages/UsuariosPage'

function App() {

  return (
    <Routes>
      <Route path="/usuarios" element={<UsuariosPage />} /> 
    </Routes>
  )
}

export default App
