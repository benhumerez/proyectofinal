import React from 'react';
import '..//build/css/Temporada.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Temporada = () => {
  return (
    <div className='contenido'>
        <div className="featured-events-title text-center mb-4">
            <h1>TEMPORADA</h1>
        </div>

        <div className="bannerevento">
            <div className="card mb-3">
                <img src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/c6e8ac79-03c6-443a-b99d-cd1494de0fdd/2024.12.15-TimeMachine-Milan-Genoa-WebHP-ENG.png?w=2048&auto=format" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">AC MILAN v GENOA</h5>
                    <p className="card-text"><small className="text-body-secondary">Stadio Giuseppe Meazza Stadium</small></p>
                </div>
            </div>
        </div>

        {/* Tarjetas de eventos */}
        <div className="tarjetas">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 tarjeta-espacio">
                        <img src="https://pbs.twimg.com/media/FmD_hZMX0BMzaOd.jpg:large" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Italian Serie A</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">El equipo se encuentra en la 3ra posicion con 37pts.</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 tarjeta-espacio">
                        <img src="https://www.ole.com.ar/images/2024/10/21/1qmy2pcOP_720x0__1.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">UEFA Champions League</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">El equipo se encuentra en la 32va posicion con 0pts.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* AQUI COPIAS REPETIDAS VECES DESDE EL DIV featured-events-title text-center mb-4 HASTA EL TEXTO P  (COLOCAS ESTILOS A LAS LETRAS) */}

    </div>
  );
};

export default Temporada;