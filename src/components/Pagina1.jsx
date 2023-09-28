import React, { useContext } from "react";
import { Context } from "../context/Context";

//actividad:
export default function Pagina1() {
  const { color } = useContext(Context);

  return (
    <>
      <div className="hijo">
        <span>Pagina </span>{" "}
        <h1 className={`${color} text-3xl`}>{color}-color</h1>{" "}
      </div>
      {/* <span>Pagina </span> <h1 className="bg--700 text-3xl ">{color}</h1> </div> */}
    </>
  );
}
