import React from 'react';
import HolaMundo from './HolaMundo.js';
import Tarjeta from './Tarjeta.js';
import Contador from './Contador.js';
import ListaTareas from './ListaTareas.js';
import Formulario from './Formulario.js';

function App() {
  return (
    <div>
      <HolaMundo />
      <Tarjeta 
        nombre="Juan" 
        apellido="Pérez" 
        profesion="Desarrollador" 
        imagen="https://via.placeholder.com/100"
      />
      <Contador />
      <ListaTareas />
      <Formulario />
    </div>
  );
}

export default App;
