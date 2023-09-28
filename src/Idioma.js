import React, { useContext } from "react";
import Context1 from "./context/Context1";
import Provider from './context/Provider'

export default function Idioma() {

  const sustitucion = (pos)=>{
    setAlumno(
      alumno.map((item, index) => 
        index == 3
         ? { ...item, idioma: pos } 
         : { ...item }
      )
    );
  }

  const { setAlumno } = useContext(Context1);
  const { alumno } = useContext(Context1);
  const cambio1 = () => {
    sustitucion(0)
    // setAlumno(
    //   alumno.map((item, index) => 
    //     index == 3
    //      ? { ...item, idioma: 0 } 
    //      : { ...item }
    //   )
    // );
  };
  const cambio2 = () => {
    sustitucion(1)
    // setAlumno(
    //   alumno.map((item, index) => 
    //     index == 3
    //      ? { ...item, idioma: 1 } 
    //      : { ...item }
    //   )
    // );
  };
  const cambio3 = () => {
    sustitucion(2)
    // setAlumno(
    //   alumno.map((item, index) => 
    //     index == 3
    //      ? { ...item, idioma: 2 } 
    //      : { ...item }
    //   )
    // );
  };
  return (
    <div className="idiomas">
      <div onClick={cambio1} className="bandera">
        <img src="../images/spain.jpg" alt="" />
      </div>
      <div onClick={cambio2} className="bandera">
        <img src="../images/uk.png" alt="" />
      </div>
      <div onClick={cambio3} className="bandera">
        <img src="../images/francia.png" alt="" />
      </div>
    </div>
  );
}
