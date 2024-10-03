
import { useState } from 'react'
import './App.css'
import Bem_vindo from './pages/Bem_vindo'
import Tela_inicial from './pages/Tela_inicial'

function App() {
  const [pagina, setPagina] = useState(<Bem_vindo/>)

  
  return (
    <>

<header className='header'>
<img src="farmarcia-logo.png" alt="" /> 
<h1 className='farm'>Farmárcia</h1>
<button onClick={() => {setPagina(<Tela_inicial/>)}}>Entrar</button>
<button onClick={() => {setPagina(<Bem_vindo/>)}}>Voltar</button>
</header>

{pagina}
    </>
  )
}

export default App
