import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/1708596a-c181-4d1c-8b7e-b0277aece029/2024.11.15-News-Iniziative-Natale-125-WebHP.jpg?w=2048&auto=format',
    altText: 'Slide 1',
    caption: 'AC MILAN VALE CADA MINUTO: EL CLUB ENCIENDE LA TEMPORADA FESTIVA CON INICIATIVAS ESPECIALES Y COLECCIONABLES',
    key: 1,
  },
  {
    src: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/e80d9476-0dff-441d-81c1-f20da907b848/2024.12.05-CU-Kit-125-WebHP.png?w=2048&auto=format',
    altText: 'Slide 2',
    caption: 'AC MILAN Y PUMA CELEBRAN 125 AÑOS DE LOS ROSSONERI CON EQUIPACIÓN ESPECIAL DE ANIVERSARIO',
    key: 2,
  },
  {
    src: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6310495e-ee47-4000-8d22-02e90d38f56c/2024.12.12-Ticketing-Girona-ENG-WebHP.png?w=2048&auto=format',
    altText: 'Slide 3',
    caption: 'AC MILAN-GIRONA: JUNTOS PARA OTRA NOCHE DE CHAMPIONS LEAGUE',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return; // Evitar cambiar mientras está animando
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return; // Evitar cambiar mientras está animando
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return; // Evitar cambiar mientras está animando
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} className="d-block w-100" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel"  // Agregar la clase 'carousel'
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

function App() {
  return (
    <div className='App'>
      <div className='contenido'>
          <div className="featured-events-title text-center mb-4">
            <br /><br />
            <h1>EVENTOS DESTACADOS</h1>
          </div>
          <Example />
      </div>
    </div>
  );
}

export default App;
