import { NavigateFunction, useNavigate } from "react-router-dom";

import imgAmmazzaMedellin from "../../../images/imgAmmazzaMedellin.png";
import imgBarbaroMedellin from "../../../images/imgBarbaroMedellin.png";
import imgMalangaMedellin from "../../../images/imgMalangaMedellin.png";
import imgTikaDogsMedellin from "../../../images/imgTikaDogsMedellin.png";

import { Space } from "../preview/preview";

export default function Medellin() {

    let navigate: NavigateFunction = useNavigate();

    return (
        <div className="MedellinContainer">
            <div className="City">
                <h3>Medellin</h3>
            </div>
            <div className="Medellin">
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Ammazza');
                }}>
                    <img src={imgAmmazzaMedellin} alt="" className="PreviewImage" />
                    <p>Ammazza Gin Garden</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Barbaro');
                }}>
                    <img src={imgBarbaroMedellin} alt="" className="PreviewImage" />
                    <p>Bárbaro Cocina Primitiva</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Malanga');
                }}>
                    <img src={imgMalangaMedellin} alt="" className="PreviewImage" />
                    <p>Malanga del Trópico</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_TikaDogs');
                }}>
                    <img src={imgTikaDogsMedellin} alt="" className="PreviewImage" />
                    <p>Tika Dogs Gourmet</p>
                </button>
            </div>
        </div>
    );
}