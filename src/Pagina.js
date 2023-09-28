import React, { useContext, useState } from "react";
import Profesora from "./components/Profesora";
import Ubicacion from "./Ubicacion";
import Context1 from "./context/Context1";

export default function Pagina() {
  const { alumno } = useContext(Context1);
  const idioma = alumno[3].idioma;
  const [ocultar1, setOcultar1] = useState(true);
  const [ocultar2, setOcultar2] = useState(true);

  const mostrar1 = () => {
    setOcultar1(!ocultar1);
  };
  const mostrar2 = () => {
    setOcultar2(!ocultar2);
  };
  console.log(alumno);
  return (
    <>
      <h1>{alumno[idioma].titulo}</h1>
      <h2>{alumno[idioma].texto}</h2>
      <div className="botones">
        <button onClick={mostrar1}>{alumno[idioma].boton1}</button>
        <button onClick={mostrar2}>{alumno[idioma].boton2}</button>
      </div>
      {ocultar1 ? <Profesora /> : null}
      {ocultar2 ? <Ubicacion /> : null}
    </>
  );
}
