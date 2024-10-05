import React, { useState } from 'react';
import './Formulario.css'; 

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarFormulario = (e) => {
    e.preventDefault();
    setMensaje(`Bienvenido, ${nombre}!`);
  };

  return (
    <div className='container'>
      <h2>Formulario de Bienvenida</h2>
      <form onSubmit={enviarFormulario}>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Escribe tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Formulario;
