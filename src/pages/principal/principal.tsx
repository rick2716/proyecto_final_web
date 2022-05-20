import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Preview from "./preview/preview";
import "./principal.css";


export default function Principal() {
    const [city, setCity] = useState("");
    const [status, setStatus] = useState("");

    let navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (city === 'Cali') {
            setStatus('Cali');
        } else if (city === 'Bogota') {
            setStatus('Bogota');
        } else if (city === 'Medellin') {
            setStatus('Medellin');
        } else if (city === 'Cartagena') {
            setStatus('Cartagena');
        } else if (city === 'Bucaramanga') {
            setStatus('Bucaramanga');
        } else {
            setStatus('');
        }
    }, [city])

    return (
        <div className="ContainerPrincipal">
            <div className="Header">
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
                    <input id="InputCities" type="text" value={city} placeholder="Ciudades" onChange={(e) => {setCity(e.target.value)}}/>
                </div>
                <div className="Preview">
                    <Preview status={status} />
                </div>
            </div>
        </div>
    );
}