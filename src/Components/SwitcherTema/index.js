import React from "react";
// Imagenes de la bombilla
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ({ tema }) => {
  const claro = <Icono src={themeOn} alt="Tema claro" />;
  const oscuro = <Icono src={themeOff} alt="Tema oscuro" />;

  return <>{tema ? oscuro : claro}</>;
};
