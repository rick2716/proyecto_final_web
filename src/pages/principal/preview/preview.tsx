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
        <div className="City">
            <h3>Cali</h3>
        </div>
        <div className="Cali">
            <button className="CityButton"
            onClick={() => {
                navigate('/Principal/Restaurant_Botanico');
            }}>
                <img src={imgBotanicoCali} alt="" className="PreviewImage"/>
                <p>Botánico Cultura Del Licor</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgMarketCali} alt="" className="PreviewImage"/>
                <p>The Market Cali</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imaCA1} alt="" className="PreviewImage"/>
                <p>Mascabado</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgTratoria} alt="" className="PreviewImage"/>
                <p>Trattoria Italia</p>
            </button>
        </div>
        <div className="City">
            <h3>Bogota</h3>
        </div>
        <div className="Bogota">
        <button className="CityButton">
                <img src={imgCafeSanAlbertoBogota} alt="" className="PreviewImage"/>
                <p>Café San Alberto Centro De Bogotá</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgCantinala15Bogota} alt="" className="PreviewImage"/>
                <p>Cantina la 15</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgCapitalinoBogota} alt="" className="PreviewImage"/>
                <p>Capitalino Restaurant</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgFrenessiBogota} alt="" className="PreviewImage"/>
                <p>Frenessí</p>
            </button>
        </div>
        <div className="City">
            <h3>Medellin</h3>
        </div>
        <div className="Medellin">
        <button className="CityButton">
                <img src={imgAmmazzaMedellin} alt="" className="PreviewImage"/>
                <p>Ammazza Gin Garden</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgBarbaroMedellin} alt="" className="PreviewImage"/>
                <p>Bárbaro Cocina Primitiva</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgMalangaMedellin} alt="" className="PreviewImage"/>
                <p>Malanga del Trópico</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgTikaDogsMedellin} alt="" className="PreviewImage"/>
                <p>Tika Dogs Gourmet</p>
            </button>
        </div>
        <div className="City">
            <h3>Cartagena</h3>
        </div>
        <div className="Cartagena">
        <button className="CityButton">
                <img src={imgKoakuCartagena} alt="" className="PreviewImage"/>
                <p>Restaurante Kokaú</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgMarZieloCartagena} alt="" className="PreviewImage"/>
                <p>Mar Y Zielo Gastro-Bar</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgSteakHouseCartagena} alt="" className="PreviewImage"/>
                <p>Porthos Steakhouse and Pub Cartagena</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgTacnaCartagena} alt="" className="PreviewImage"/>
                <p>Tacna Restaurant</p>
            </button>
        </div>
        <div className="City">
            <h3>Bucaramanga</h3>
        </div>
        <div className="Bucaramanga">
        <button className="CityButton">
                <img src={img1622Bucaramanga} alt="" className="PreviewImage"/>
                <p>Restaurante 1622</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgElGarajeBucaramanga} alt="" className="PreviewImage"/>
                <p>El Garaje</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgMaizPelaoBucaramanga} alt="" className="PreviewImage"/>
                <p>Maiz Pelao</p>
            </button>
            <Space />
            <button className="CityButton">
                <img src={imgTaikinsaBucaramanga} alt="" className="PreviewImage"/>
                <p>Taikinsa</p>
            </button>
        </div>
    </div>
  );
}