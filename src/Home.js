import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Loggin";
import Register from "./components/Register";
import Card2 from './components/Card2'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  NavLink,
  Link
} from "react-router-dom";

function App() {
  const lista = ["atanagildo","ervigio","sisebuto","ataulfo","leovigildo","recesvinto"]

  return (
    <>
      <div className="container mx-auto bg-gray-200 min-h-screen  ">
        <Nav />
        <header className=" "></header>
        <main className="container mx-auto p-4 reyes columns-2 ">
          {/* <h2 className="text-xl font-semibold mb-4 text-center capitalize hover:uppercase">
            Contenido Principal
          </h2> */}
          {lista.map((rey,index)=>
            <Link to={`/reyes/${rey}`}><img  src={`https://www.html6.es/img/rey_${rey}.png`}  /></Link>)}
            {/* <Card2/> */}
        </main>
      </div>
      <footer className=" container mx-auto bg-gray-600  py-8 ">
        <p className="text-center">
          © {new Date().getFullYear()} Proyecto Viandas.org
        </p>
      </footer>
    </>
  );
}

export default App;
