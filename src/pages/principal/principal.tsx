import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./principal.css";

export default function Principal() {

let navigate : NavigateFunction = useNavigate();

const handleSubmitCiudades = () => {
};

  return (
    <div className="ContainerPrincipal">
        <div className="Header">
            <div className="Nombre">
                <h3>Nombre</h3>
            </div>
            <div className="Cerrar">
                <button id="Cerrar" onClick={() => {
                    navigate('/Login');
                }}>Cerrar sesión</button>
            </div>
        </div>
        <div className="BodyPrincipal">
            <div className="TextoCiudad">
                <h1>Selecciona una ciudad para ver restaurantes</h1>
            </div>
            <div className="Buscador">
                <form className="Busqueda" onSubmit={handleSubmitCiudades}>
                    <input id="InputCiudades" type="text" placeholder="Ciudades"/>
                    <button id="BotonBuscar" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </div>
  );
}