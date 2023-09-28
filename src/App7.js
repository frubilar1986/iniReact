import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import Pagina1 from "./components/Pagina1";
import Colores from "./components/Colores";
import { Datos } from "./context/Context";
import { useState } from "react";

function App() {
  const [personaje,setPersonaje] = useState([]);
  const test = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => {
        response.results.map((item) =>
          setPersonaje((e) => [
            ...e,
            <div className="" key={item.id}>
              {item.name}
              <img  src={item.image} />
            </div>,
          ])
        );
      })
      .catch(() => console.log("error en fetch"));
  };

  return (
    <>
      <div className="container mx-auto bg-gray-200 min-h-screen ">
        <header className="bg-blue-500 p-4 text-white ">
          <h1 className="text-5xl font-bold">Mi Aplicaciónn</h1>
        </header>
        <main className="container mx-auto p-4">
          <h2 className="text-xl font-semibold mb-4 text-center ">
            Contenido Principal
          </h2>
          <div>
            <Datos>
              <div className="App">
                <Pagina1 />
                <Pagina1 />
                <Pagina1 />
              </div>
              <Colores />
            </Datos>
          </div>
        </main>
        <button onClick={test}>Fetch</button>
        <div>{personaje}</div>
        
      </div>
      <footer className=" container mx-auto bg-gray-600  py-8 ">
        <p className="text-center">
          © {new Date().getFullYear()} Proyecto final
        </p>
      </footer>
    </>
  );
}

export default App;
