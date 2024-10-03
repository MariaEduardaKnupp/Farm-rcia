import React, { useState } from 'react';

function TelaInicial() {
  const [fila, setFila] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState('');

  const gerarSenha = (tipo) => {
    let numero = 1;
    for (let i = 0; i < fila.length; i++) {
      if (fila[i].tipo === tipo) {
        numero++;
      }
    }
    const novaSenha = { tipo, numero };
    setFila(prevFila => [...prevFila, novaSenha]);
  };

  const chamarSenha = () => {
    if (!fila[0]) {
      alert('A fila está vazia!');
      return;
    }

    let senhaChamando = null;

    for (let i = 0; i < fila.length; i++) {
      if (!senhaChamando || (fila[i].tipo === 'Preferencial' && senhaChamando.tipo === 'Normal')) {
        senhaChamando = fila[i];
      }
    }

    const novaFila = [];
    for (let i = 0; i < fila.length; i++) {
      if (fila[i] !== senhaChamando) {
        novaFila.push(fila[i]);
      }
    }

    setFila(novaFila);
    setSenhaAtual(`Senha chamada: ${senhaChamando.tipo} ${senhaChamando.numero}`);
  };

  return (
    <div>
     
      <div style={{ padding: '20px' }}>
        <h1 className='sistema'>Sistema de Senhas - Farmácia</h1>
        <div>
          <button className='senhas' onClick={() => gerarSenha('Normal')}>Gerar Senha Normal</button>
          <button className='senhas' onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button>
          <button className='senhas' onClick={chamarSenha}>Chamar Senha</button>
        </div>
        <h2 className='fila'>{senhaAtual}</h2>
        <h3 className='fila'>Fila:</h3>
        <ul className='fila'>
          {fila.map((senha, index) => (
            <li key={index}>{`${senha.tipo} ${senha.numero}`}</li>
          ))}
        </ul>
        <div className='fila'>
        {fila.length === 0 && <p>A fila está vazia.</p>}
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;


