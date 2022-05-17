import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./principal.css";

export default function Principal() {

  return (
    <div className="Container">
        <div className="Header">
            <div className="Nombre">
                <h3>Nombre</h3>
            </div>
            <div className="Cerrar">
                <button>Cerrar sesión</button>
            </div>
        </div>
        <div className="Body">
            <h2>Selecciona una ciudad para ver restaurantes</h2>
        </div>
    </div>
  );
}