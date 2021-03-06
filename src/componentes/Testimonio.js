import React from 'react';
import '../css/Testimonio.css'

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require(`../img/testimonio-${props.imag}.jpg`)}
      alt='Foto de Irving'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} de {props.empresa}</p>
        <p className='texto-testimonio'>{props.texto}</p>
      </div>
    </div>
  );
}

export default Testimonio;