import { NavigateFunction, useNavigate } from "react-router-dom";
import Preview from "./preview/preview";
import "./principal.css";

export default function Principal() {

let navigate : NavigateFunction = useNavigate();

const handleSubmitCities = () => {
};

  return (
    <div className="ContainerPrincipal">
        <div className="Header">
            <div className="Name">
                <h3>Nombre</h3>
            </div>
            <div className="LogOut">
                <button id="LogOut" onClick={() => {
                    navigate('/Login');
                }}>Cerrar sesión</button>
            </div>
        </div>
        <div className="BodyPrincipal">
            <div className="TextCiudad">
                <h1>Selecciona una ciudad para ver restaurantes</h1>
                <p>Cali - Bogota - Medellin - Cartagena - Bucaramanga</p> 
            </div>
            <div className="Search-Bar">
                <form className="Search" onSubmit={handleSubmitCities}>
                    <input id="InputCities" type="text" placeholder="Ciudades"/>
                    <button id="SearchButton" type="submit">Buscar</button>
                </form>
            </div>
            <div className="Preview">
                <Preview />
            </div>
        </div>
    </div>
  );
}