import React from 'react';
import './Tarjeta.css';

const Tarjeta = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="container">
    <div className="tarjeta">
      <img src={imagen} alt="Foto de perfil" />
      <h2>{nombre} {apellido}</h2>
      <p>{profesion}</p>
    </div>
    </div>
  );
};

export default Tarjeta;
