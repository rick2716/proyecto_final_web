import { NavigateFunction, useNavigate } from "react-router-dom";

import img1622Bucaramanga from "../../../images/img1622Bucaramanga.png";
import imgElGarajeBucaramanga from "../../../images/imgElGarajeBucaramanga.png";
import imgMaizPelaoBucaramanga from "../../../images/imgMaizPelaoBucaramanga.png";
import imgTaikinsaBucaramanga from "../../../images/imgTaikinsaBucaramanga.png";

import { Space } from "../preview/preview";

export default function Bucaramanga() {

    let navigate: NavigateFunction = useNavigate();

    return (
        <div className="BucaramangaContainer">
            <div className="City">
                <h3>Bucaramanga</h3>
            </div>
            <div className="Bucaramanga">
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_1622');
                }}>
                    <img src={img1622Bucaramanga} alt="" className="PreviewImage" />
                    <p>Restaurante 1622</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_ElGaraje');
                }}>
                    <img src={imgElGarajeBucaramanga} alt="" className="PreviewImage" />
                    <p>El Garaje</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_MaizPelao');
                }}>
                    <img src={imgMaizPelaoBucaramanga} alt="" className="PreviewImage" />
                    <p>Maiz Pelao</p>
                </button>
                <Space />
                <button className="CityButton"
                onClick={() => {
                    navigate('/Principal/Restaurant_Taikinsa');
                }}>
                    <img src={imgTaikinsaBucaramanga} alt="" className="PreviewImage" />
                    <p>Taikinsa</p>
                </button>
            </div>
        </div>
    );
}