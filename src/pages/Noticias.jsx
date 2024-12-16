import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//build/css/Noticias.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Noticias = () => {
  // Estado para controlar los modales
  const [modal, setModal] = useState({
    showModal1: false,
    showModal2: false,
    showModal3: false
  });

  // Función para alternar los modales
  const toggleModal = (modalName) => {
    setModal((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }));
  };

  return (
    <div className='contenido'>
      <div className="featured-events-title text-center mb-4">
        <h1>NOTICIAS</h1>
      </div>

      <div className="container my-5">
        <div className="row row-cols-1 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card h-100 show-card">
              <img src='https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/f989af5f-2e34-449b-a305-18af04e35efc/2024.12.13-PSG-WebHP.png?w=2048&auto=format' className="card-img-top" alt="Show 1" />
              <div className="card-body">
                <h5 className="card-title">HORARIO DEL FIN DE SEMANA: LOS LADOS DE PRIMAVERA BUSCAN LA REDENCIÓN</h5>
              </div>
              <div className="card-footer text-center">
                <Button color="danger" onClick={() => toggleModal('showModal1')}>
                  Ver Más
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card h-100 show-card">
              <img src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/888fc2c9-9c56-42d7-be22-1e6d0d8d25b4/2024.12.13-Preview-LazioMilan-Women-WebHP-ENG.png?w=2048&auto=format" className="card-img-top" alt="Show 2" />
              <div className="card-body">
                <h5 className="card-title">MUJERES, LAZIO - AC MILAN: PREVIA DEL PARTIDO
                </h5>
              </div>
              <div className="card-footer text-center">
                <Button color="danger" onClick={() => toggleModal('showModal2')}>
                  Ver Más
                </Button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card h-100 show-card">
              <img src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/41635a0d-3647-4870-9cb0-886cdc2b4ecc/2024.12.13-Report-Allenamento-WebHP.png?w=2048&auto=format" className="card-img-top" alt="Show 3" />
              <div className="card-body">
                <h5 className="card-title">MILANELLO: EL EQUIPO CONTINÚA SU TRABAJO</h5>
              </div>
              <div className="card-footer text-center">
                <Button color="danger" onClick={() => toggleModal('showModal3')}>
                  Ver Más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 1 */}
      <Modal isOpen={modal.showModal1} toggle={() => toggleModal('showModal1')}>
        <ModalHeader toggle={() => toggleModal('showModal1')}>Los rossoneri de Guidi se enfrentan a la Juventus, los rossoneri de Zago se enfrentan al Parma, los sub-16 y sub-15 reciben al Brescia</ModalHeader>
        <ModalBody>
        La eliminación de la Liga Juvenil es un motivo de orgullo para volver a la liga. La Primavera vuelve a la acción en la jornada 15 de Liga, contra la Juventus, con el objetivo de conservar su puesto cerca de la cima de la tabla. La Primavera femenina también estará en acción, ya que esperan un resultado positivo que deje atrás la reciente derrota en el Derby. La selección masculina sub-17 recibe a Monza en la Casa del Fútbol PUMA, mientras que las selecciones sub-16 y sub-15 se enfrentan a Brescia. El fin de semana de partidos termina con la selección sub-18 que se enfrenta al Atalanta fuera de casa.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal('showModal1')}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      {/* Modal 2 */}
      <Modal isOpen={modal.showModal2} toggle={() => toggleModal('showModal2')}>
        <ModalHeader toggle={() => toggleModal('showModal2')}>Los rossonere viajan a Roma para el último partido de 2024</ModalHeader>
        <ModalBody>
        El AC Milan se prepara para enfrentarse a la Lazio en la jornada 13 de la Serie A femenina. El partido está previsto para el 14 de diciembre de 2024 a las 12:30 CET en Roma, en el Stadio Mirko Fersini. Bajo la dirección del técnico Bakker, los rossonere se enfrentarán a la Lazio, dirigida por Gianluca Grassadonia. A medida que avanza la liga, cada punto se vuelve vital para las ambiciones de los rossonere. Nos acercamos al inicio con nuestra previa del partido.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal('showModal2')}>Cerrar</Button>
        </ModalFooter>
      </Modal>

      {/* Modal 3 */}
      <Modal isOpen={modal.showModal3} toggle={() => toggleModal('showModal3')}>
        <ModalHeader toggle={() => toggleModal('showModal3')}>Entrenamiento matutino de los rossoneri que continúan con su preparación de cara al AC Milan-Génova</ModalHeader>
        <ModalBody>
        El equipo estuvo esta mañana en Milanello para entrenar en preparación para el próximo partido de liga que enfrentará al AC Milan contra el Génova el domingo 15 de diciembre a las 20:45 CET en San Siro.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggleModal('showModal3')}>Cerrar</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default Noticias;