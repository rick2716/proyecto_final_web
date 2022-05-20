import { NavigateFunction, useNavigate } from "react-router-dom";

import imgBotanicoCali from "../../../images/imgBotanicoCali.png";
import imgMarketCali from "../../../images/imgMarketCali.png";
import imaCA1 from "../../../images/imaCA1.png";
import imgTratoria from "../../../images/imgTratoriaCali.png";

import { Space } from "../preview/preview";

export default function Cali() {

    let navigate: NavigateFunction = useNavigate();

    return (
        <div className="CaliContainer">
            <div className="City">
                <h3>Cali</h3>
            </div>
            <div className="Cali">
                <button className="CityButton"
                    onClick={() => {
                        navigate('/Principal/Restaurant_Botanico');
                    }}>
                    <img src={imgBotanicoCali} alt="" className="PreviewImage" />
                    <p>Botánico Cultura Del Licor</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Market');
                }}>
                    <img src={imgMarketCali} alt="" className="PreviewImage" />
                    <p>The Market Cali</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Mascabado');
                }}>
                    <img src={imaCA1} alt="" className="PreviewImage" />
                    <p>Mascabado</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Trattoria');
                }}>
                    <img src={imgTratoria} alt="" className="PreviewImage" />
                    <p>Trattoria Italia</p>
                </button>
            </div>
        </div>
    );
}