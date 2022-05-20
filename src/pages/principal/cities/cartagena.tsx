import { NavigateFunction, useNavigate } from "react-router-dom";

import imgKoakuCartagena from "../../../images/imgKoakuCartagena.png";
import imgMarZieloCartagena from "../../../images/imgMarZieloCartagena.png";
import imgSteakHouseCartagena from "../../../images/imgSteakhouseCartagena.png";
import imgTacnaCartagena from "../../../images/imgTacnaCartagena.png";

import { Space } from "../preview/preview";

export default function Cartagena() {

    let navigate: NavigateFunction = useNavigate();

    return (
        <div className="CartagenaContainer">
            <div className="City">
                <h3>Cartagena</h3>
            </div>
            <div className="Cartagena">
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Koaku');
                }}>
                    <img src={imgKoakuCartagena} alt="" className="PreviewImage" />
                    <p>Restaurante Kokaú</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_MarZielo');
                }}>
                    <img src={imgMarZieloCartagena} alt="" className="PreviewImage" />
                    <p>Mar Y Zielo Gastro-Bar</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_SteakHouse');
                }}>
                    <img src={imgSteakHouseCartagena} alt="" className="PreviewImage" />
                    <p>Porthos Steakhouse and Pub Cartagena</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Tacna');
                }}>
                    <img src={imgTacnaCartagena} alt="" className="PreviewImage" />
                    <p>Tacna Restaurant</p>
                </button>
            </div>
        </div>
    );
}