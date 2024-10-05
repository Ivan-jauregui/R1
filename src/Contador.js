import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className='container'>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
};

export default Contador;
