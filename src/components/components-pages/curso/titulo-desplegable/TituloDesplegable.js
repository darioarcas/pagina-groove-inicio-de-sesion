import { useState } from 'react';
import './TituloDesplegable.css';

const TituloDesplegable = ({informacion, alquiler=0}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDescripcion = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="contenedor" onClick={toggleDescripcion}>

      { // Si NO fue llamado por Alquileres
        !alquiler ?
        <>
          <h2  className="titulo text-uppercase">
            {informacion.titulo}
          </h2>
          <div className={`descripcion ${isVisible ? 'visible' : ''}`}>
            <p>
              {informacion.descripcion}
            </p>
          </div>
        </>
        : ""
      }
      
      { // Si fue llamado por Alquileres
        alquiler ?
        <>
          <h2 onClick={toggleDescripcion} className="titulo">
            {informacion.titulo}
          </h2>
          <div className={`descripcion ${isVisible ? 'visible' : ''}`}>
            <ul>
              {informacion.descripcion.map(item =>{
                return <li>item</li>
              })}
            </ul>
          </div>
        </>
        : ""
      }


    </div>
  );
};

export default TituloDesplegable;
