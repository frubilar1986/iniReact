import React, { useContext } from "react";
import { Context } from "../context/Context";// va con {} porque no es funcion

function Colores() {
  const {setColor} = useContext(Context)
  return (
    <div className="colores">
      <div className="color" onClick={()=>{
        setColor('bg-[#3285f4]')
      }} > </div>
      <div className="color" onClick={()=>{
        setColor('bg-[#c74f1c]')
      }} ></div>
      <div className="color" onClick={()=>{
        setColor('bg-[#f43276]')
      }} > </div>
      <div className="color" onClick={()=>{
        setColor('bg-[#6ede93]')
      }} ></div>
    </div>
  );
}

export default Colores;
