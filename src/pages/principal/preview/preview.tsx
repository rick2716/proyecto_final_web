import { NavigateFunction, useNavigate } from "react-router-dom";
import "./preview.css";

//imagenes
import imgBotanicoCali from "../../../images/imgBotanicoCali.png";
import imgMarketCali from "../../../images/imgMarketCali.png";
import imaCA1 from "../../../images/imaCA1.png";
import imgTratoria from "../../../images/imgTratoriaCali.png";
import imgCafeSanAlbertoBogota from "../../../images/imgCafeSanAlbertoBogota.png";
import imgCantinala15Bogota from "../../../images/imgCantinala15Bogota.png";
import imgCapitalinoBogota from "../../../images/impCapitalinoBogota.png";
import imgFrenessiBogota from "../../../images/imgFrenessiBogota.png";
import imgAmmazzaMedellin from "../../../images/imgAmmazzaMedellin.png";
import imgBarbaroMedellin from "../../../images/imgBarbaroMedellin.png";
import imgMalangaMedellin from "../../../images/imgMalangaMedellin.png";
import imgTikaDogsMedellin from "../../../images/imgTikaDogsMedellin.png";
import imgKoakuCartagena from "../../../images/imgKoakuCartagena.png";
import imgMarZieloCartagena from "../../../images/imgMarZieloCartagena.png";
import imgSteakHouseCartagena from "../../../images/imgSteakhouseCartagena.png";
import imgTacnaCartagena from "../../../images/imgTacnaCartagena.png";
import img1622Bucaramanga from "../../../images/img1622Bucaramanga.png";
import imgElGarajeBucaramanga from "../../../images/imgElGarajeBucaramanga.png";
import imgMaizPelaoBucaramanga from "../../../images/imgMaizPelaoBucaramanga.png";
import imgTaikinsaBucaramanga from "../../../images/imgTaikinsaBucaramanga.png";

function Space(){
    return <div style={{width: 20}}/>
}

export default function Preview() {

let navigate : NavigateFunction = useNavigate();

  return (
    <div className="ContainerPreview">
        <div className="Ciudad">
            <h3>Cali</h3>
        </div>
        <div className="Cali">
            <button className="BotonCiudad">
                <img src={imgBotanicoCali} alt="" />
                <p>Botánico Cultura Del Licor</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgMarketCali} alt="" />
                <p>The Market Cali</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imaCA1} alt="" />
                <p>Mascabado</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgTratoria} alt="" />
                <p>Trattoria Italia</p>
            </button>
        </div>
        <div className="Ciudad">
            <h3>Bogota</h3>
        </div>
        <div className="Bogota">
        <button className="BotonCiudad">
                <img src={imgCafeSanAlbertoBogota} alt="" />
                <p>Café San Alberto Centro De Bogotá</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgCantinala15Bogota} alt="" />
                <p>Cantina la 15</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgCapitalinoBogota} alt="" />
                <p>Capitalino Restaurant</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgFrenessiBogota} alt="" />
                <p>Frenessí</p>
            </button>
        </div>
        <div className="Ciudad">
            <h3>Medellin</h3>
        </div>
        <div className="Medellin">
        <button className="BotonCiudad">
                <img src={imgAmmazzaMedellin} alt="" />
                <p>Ammazza Gin Garden</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgBarbaroMedellin} alt="" />
                <p>Bárbaro Cocina Primitiva</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgMalangaMedellin} alt="" />
                <p>Malanga del Trópico</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgTikaDogsMedellin} alt="" />
                <p>Tika Dogs Gourmet</p>
            </button>
        </div>
        <div className="Ciudad">
            <h3>Cartagena</h3>
        </div>
        <div className="Cartagena">
        <button className="BotonCiudad">
                <img src={imgKoakuCartagena} alt="" />
                <p>Restaurante Kokaú</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgMarZieloCartagena} alt="" />
                <p>Mar Y Zielo Gastro-Bar</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgSteakHouseCartagena} alt="" />
                <p>Porthos Steakhouse and Pub Cartagena</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgTacnaCartagena} alt="" />
                <p>Tacna Restaurant</p>
            </button>
        </div>
        <div className="Ciudad">
            <h3>Bucaramanga</h3>
        </div>
        <div className="Bucaramanga">
        <button className="BotonCiudad">
                <img src={img1622Bucaramanga} alt="" />
                <p>Restaurante 1622</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgElGarajeBucaramanga} alt="" />
                <p>El Garaje</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgMaizPelaoBucaramanga} alt="" />
                <p>Maiz Pelao</p>
            </button>
            <Space />
            <button className="BotonCiudad">
                <img src={imgTaikinsaBucaramanga} alt="" />
                <p>Taikinsa</p>
            </button>
        </div>
    </div>
  );
}