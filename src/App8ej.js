import "../node_modules/tailwindcss/tailwind.css";
import "./myCss.css";
import "./App.css";
import Login from "./components/Loggin";
import Register from "./components/Register";
import Home from "./Home";
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nosotros/:letra" element={<Nosotros />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
        {/* <Route path="/*" element={<Error />}/> */}
      </Routes>
    </BrowserRouter>
    // <>
    //   <div className="container mx-auto bg-gray-200 min-h-screen ">
    //     <header className="bg-blue-500 p-4 text-white ">
    //       <h1 className="text-5xl font-bold">Mi Aplicaciónn</h1>
    //     </header>
    //     <main className="container mx-auto p-4">
    //       <h2 className="text-xl font-semibold mb-4 text-center capitalize hover:uppercase">
    //         Contenido Principal
    //       </h2>

    //     </main>
    //   </div>
    //   <footer className=" container mx-auto bg-gray-600  py-8 ">
    //     <p className="text-center">
    //       © {new Date().getFullYear()} Proyecto final
    //     </p>
    //   </footer>
    // </>
  );
}

export default App;
