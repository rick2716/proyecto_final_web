import imgMaizPelaoBucaramanga from "../../images/imgMaizPelaoBucaramanga.png";
import "./restaurants.css"

export default function Restaurant_MaizPelao(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Maiz Pelao</h1>
     </div>
     <div className="Image">
     <img src={imgMaizPelaoBucaramanga} alt="" />
     </div>
     <div className="Adress">
      <p>Calle 37 # 54-12</p>
     </div>
     <div className="Review">
       <p>Detalles <br />
        -Precios: $ 20.000 - $ 60.000 <br />
        -Tipos de comida: Colombiana, Caribeña, Mariscos, Parrilla, Contemporánea <br />
        -Dietas especiales: Opciones veganas
        </p>  
     </div>
    </div>)
};