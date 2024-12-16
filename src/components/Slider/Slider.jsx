import React from 'react'
import estilos from './Slider.module.css'

function Slider({ imagenes }) {

  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

  if(!Array.isArray(imagenes) && cantidad === 0) return;

  const siguienteImagen = () => {
      setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
      setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual -1);
  };

  return (
    <div className={estilos.container}>
    <button onClick={anteriorImagen}>←</button>
    {imagenes.map((imagen, index) => {
        return (
            <div>
                { imagenActual === index && (
                
                <img key={index} src={imagen} alt='imagen' />

                )}
            </div>
        );        
    })}
    <button onClick={siguienteImagen}>→</button>
    </div>
  )
}

export default Slider