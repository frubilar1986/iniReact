import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import "./App.css";
import Idioma from "./Idioma";
import Pagina from "./Pagina";
import Provider from "./context/Provider";

function App() {
  return (
    <>
      <div className="container mx-auto bg-gray-200 min-h-screen ">
        <header className="bg-blue-500 p-4 text-white ">
          <h1 className="text-5xl font-bold">Mi Aplicaciónn</h1>
        </header>
        <main className="container mx-auto p-4">
          <h2 className="text-xl font-semibold mb-4 text-center capitalize hover:uppercase">
            Contenido Principal
          </h2>
          <Provider>
            <div className="bandera">
              <Idioma />
            </div>
            <div className="contenido ">
              <Pagina />
            </div>
          </Provider>
        </main>
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
