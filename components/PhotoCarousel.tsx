"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/images/poco-x7.jpg",
    alt: "Dois celulares Poco em uma foto de produto",
    label: "Celulares para o seu dia a dia",
  },
  {
    src: "/images/galaxy-a36.jpg",
    alt: "Celular Samsung Galaxy A36 5G ao lado da embalagem",
    label: "Tecnologia que acompanha você",
  },
  {
    src: "/images/galaxy-a07.jpg",
    alt: "Celulares Samsung Galaxy A07 em diferentes cores",
    label: "Opções para cada escolha",
  },
  {
    src: "/images/redmi-note-15.jpg",
    alt: "Celular Redmi Note 15 ao lado da embalagem",
    label: "Encontre seu próximo celular",
  },
  {
    src: "/images/redmi-watch.jpg",
    alt: "Embalagem de relógio inteligente Redmi Watch 5 Lite",
    label: "Eletrônicos para a rotina",
  },
];

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    setActive((index + photos.length) % photos.length);
  }

  return (
    <div className="carousel" aria-label="Fotos de produtos da Infotech Tapera" role="region" aria-roledescription="carrossel">
      <div className="carousel-image-wrap">
        <Image
          key={photos[active].src}
          src={photos[active].src}
          alt={photos[active].alt}
          fill
          priority={active === 0}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 45vw, 550px"
          className="carousel-image"
        />
        <span className="carousel-top-label">NOSSA SELEÇÃO</span>
        <div className="carousel-gradient" aria-hidden="true" />
        <div className="carousel-bottom">
          <div className="carousel-caption" aria-live="polite">
            <span>0{active + 1} / 0{photos.length}</span>
            <strong>{photos[active].label}</strong>
          </div>
          <div className="carousel-arrows">
            <button type="button" onClick={() => goTo(active - 1)} aria-label="Foto anterior">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={() => goTo(active + 1)} aria-label="Próxima foto">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-dots" aria-label="Escolher foto">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={index === active ? "active" : ""}
            onClick={() => goTo(index)}
            aria-label={`Mostrar foto ${index + 1} de ${photos.length}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
