
import { useState } from 'react'
import './App.css'
import Bem_vindo from './pages/Bem_vindo'
import Tela_inicial from './pages/Tela_inicial'

function App() {
  const [pagina, setPagina] = useState(<Tela_inicial/>)

  
  return (
    <>

     <Tela_inicial />
     <Bem_vindo />
    </>
  )
}

export default App
