import imgMarketCali from "../../images/imgMarketCali.png";
import "./restaurants.css"

export default function Restaurant_market(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>The Market Cali</h1>
     </div>
     <div className="Image">
     <img src={imgMarketCali} alt="" />
     </div>
     <div className="Adress">
      <p>Avenida 8 norte No. 10-18</p>
     </div>
     <div className="Review">
       <p>Detalles <br />
        -Comidas: Desayuno, Almuerzo, Cena, Brunch, Abierto hasta tarde <br />
        -Tipos de comida: Italiana, Estadounidense, Colombiana <br />
        -Dietas especiales: Apto para vegetarianos, Opciones veganas, Opciones sin gluten</p>  
     </div>
     
    </div>)
};