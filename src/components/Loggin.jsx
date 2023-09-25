import React from "react";
import Nav from '../components/Nav'
import "../myCss.css";
import "../index.css";
import {NavLink} from 'react-router-dom'

export default function Loggin() {
  const id = 4;
   

  return (
    <>
      
      {/* <!-- HTML --> */}
      <div className="min-h-screen bg-[#2e313b] grid grid-cols-1 lg:grid-cols-1 container mx-auto ">
      <Nav/>
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto text-center">
          {/* <!-- Titulo --> */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Iniciar sesión</h1>
            <p className="text-gray-400">
              Ingresa al sistema con tus credenciales
            </p>
          </div>
          {/* <!-- Boton para ingresar con Google --> */}
          <div className="w-full">
            
          </div>
          {/* <!-- Form --> */}
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="text-gray-200">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent  border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-200">
                Contraseña *
              </label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿No tienes cuenta?{" "}
                {/* <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  Registrate
                </a> */}
                <NavLink to='/register' className={"text-indigo-400 hover:text-indigo-500 transition-colors"}>Registrate</NavLink>
              </span>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a> */}
              {/* El siguiente cod prueba enviar datos por parametros */}
              <NavLink to={`/nosotros/${id}`} className={"text-gray-400 hover:text-gray-200 transition-colors"} >¿Olvidaste tu contraseña?</NavLink>
           
            </div>
            <div className="mt-4 order-1 md:order-2">
              <button
                type="submit"
                className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        {/* <!-- Imagen de fondo --> to={"/nosotros/"+id}*/}
  
        <div className="bg hidden lg:block"></div>
      </div>
    </>
  );
}
