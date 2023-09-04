import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
// Se importa IconoTema para traer el cambio de color de la pagina
import { Icono, IconoTema } from "./Components/UI";

export default (type) => {
  // este type es el que viene en info.js
  const Images = {
    Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
    Salud: <IconoTema src={salud} alt="Salud" />,
    Transporte: <IconoTema src={transporte} alt="Transporte" />,
    Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
    default: <IconoTema src={otros} alt="Otros" />,
  };

  // Si no encuentra el type pone una imagen por defecto
  return Images[type] || Images["default"];
};
