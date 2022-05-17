import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./principal.css";

export default function Principal() {

let navigate : NavigateFunction = useNavigate();

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
                <select id="ComboBoxCiudades" name="Ciudades:">
                    <option value="value1">Cali</option>
                    <option value="value2">Bogota</option>
                    <option value="value3">Medellin</option>
                    <option value="value4">Bucaramanga</option>
                    <option value="value5">Cartagena</option>
                </select>
                <button id="BotonBuscar" onClick={()=>{
                    navigate('/Principal/Restaurante1');
                }}>Buscar</button>
            </div>
        </div>
    </div>
  );
}