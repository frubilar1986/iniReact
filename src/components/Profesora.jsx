import React, { useContext } from "react";
import Context1 from "../context/Context1";

export default function Profesora() {
  const { alumno } = useContext(Context1);
  const idioma = alumno[3].idioma;

  const imagen = `../images/${alumno[idioma].foto}`;
  return (
    <div className="profesora">
      <h1>{alumno[idioma].boton1}</h1>
      <div className="foto">
        <img className="imagen" src={imagen} alt="" />
      </div>
      <div className="nombre"> {alumno[idioma].nombre}</div>
    </div>
  );
}
