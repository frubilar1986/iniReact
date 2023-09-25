import React, { useContext } from 'react'
import Context1 from './context/Context1'




export default function Ubicacion() {
    const {alumno} = useContext(Context1)
    const idioma = alumno[3].idioma 
  return (
    <div className='ubicacion'>
        <h1>
            {alumno[idioma].boton2}
        </h1>
        <div className='text'>direccion</div>
      
    </div>
  )
}
