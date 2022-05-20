import { NavigateFunction, useNavigate } from "react-router-dom";

import imgCafeSanAlbertoBogota from "../../../images/imgCafeSanAlbertoBogota.png";
import imgCantinala15Bogota from "../../../images/imgCantinala15Bogota.png";
import imgCapitalinoBogota from "../../../images/impCapitalinoBogota.png";
import imgFrenessiBogota from "../../../images/imgFrenessiBogota.png";

import { Space } from "../preview/preview";

export default function Bogota() {

    let navigate: NavigateFunction = useNavigate();

    return (
        <div className="BogotaContainer">
            <div className="City">
                <h3>Bogota</h3>
            </div>
            <div className="Bogota">
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_CafeSanAlberto');
                }}>
                    <img src={imgCafeSanAlbertoBogota} alt="" className="PreviewImage" />
                    <p>Café San Alberto Centro De Bogotá</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_CantinaLa15');
                }}>
                    <img src={imgCantinala15Bogota} alt="" className="PreviewImage" />
                    <p>Cantina la 15</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Capitalino');
                }}>
                    <img src={imgCapitalinoBogota} alt="" className="PreviewImage" />
                    <p>Capitalino Restaurant</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Frenessi');
                }}>
                    <img src={imgFrenessiBogota} alt="" className="PreviewImage" />
                    <p>Frenessí</p>
                </button>
            </div>
        </div>
    );
}