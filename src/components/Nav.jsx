import React from "react";
import { NavLink } from "react-router-dom";
import '../myCss.css'

export default function Nav() {
  return (
    <nav className="sticky top-0">
      <div className="w-full bg-slate-800 rounded-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center text-cyan-50  ">
        <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
          Viandas
        </h1>
        <form className="md:col-span-4 flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-full bg-gray-600 outline-none p-2 rounded-lg"
            placeholder="Buscar"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
        <nav className="md:col-span-5 flex items-center gap-4 justify-end">
            <NavLink className= { ( {isActive})=>isActive?"activado":"hover:text-2xl"}    to="/"> Inicio</NavLink>
          <NavLink className= { ( {isActive})=>isActive?"activado":"hover:text-2xl"}  to="/nosotros/"> Nosotros</NavLink>
          <NavLink className= { ( {isActive})=>isActive?"activado":"hover:text-2xl"}  to="*"> Servicio</NavLink>
          <NavLink className= { ( {isActive})=>isActive?"activado":"hover:text-2xl"}  to="/Login"> Login</NavLink>
          <NavLink className={ ( {isActive})=>isActive?"activado":"hover:text-2xl"}  to="/Register"> Registro</NavLink>
        </nav>
      </div>
    </nav>
  );
}
