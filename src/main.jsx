import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContadorApp from "./contadorApp";

// const datos = { nombre: "leandro", apellido: "Porcelli" };
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContadorApp value={100} />
  </React.StrictMode>
);
