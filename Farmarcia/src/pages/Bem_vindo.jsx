import { useState } from "react"
import Tela_inicial from "./Tela_inicial"

function Bem_vindo() {
 

  return (
    <div>



 <div className='primeiro'>
<h1 className="bem-vindo">Bem Vindo a Farmárcia</h1>
<h2>Estamos de volta e melhor do que nunca!</h2>
<h3>Estamos emocionados em anunciar que nossa farmácia mudou de direção! <br />
Com um novo visual e uma missão renovada, estamos prontos para servir <br /> nossa comunidade com ainda mais carinho e dedicação.</h3>
<h2>Você Está Convidado!</h2>
<h3>Inauguração: [01/10/24] às [15:00]
Venha celebrar conosco e descubra tudo o <br /> que preparamos para você!</h3>
<h2>Contatos:

Telefone: [(48)991881776] <br />
E-mail: [farmarcia.atendimento@gmail.com] <br />
Local: [rua astrogildo da silva pereira dos santos]</h2>

</div> 
<div>
<img src="farmarcia-camisetas.png" alt="camisa" className="camisa" />


</div>
    </div>
  )
}

export default Bem_vindo
