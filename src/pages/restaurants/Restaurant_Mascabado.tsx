import imaCA1 from "../../images/imaCA1.png";
import "./restaurants.css"

export default function Restaurant_Mascabado(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Mascabado</h1>
     </div>
     <div className="Image">
     <img src={imaCA1} alt="" />
     </div>
     <div className="Adress">
      <p>Calle 26N 5AN 25</p>
     </div>
     <div className="Review">
       <p>Detalles <br />
        -Rango de precios: $ 20.492 - $ 61.475 <br />
        -Tipos de comida: Café, Contemporánea, Saludable, Fusión <br />
        -Dietas especiales: Apto para vegetarianos, Opciones veganas, Opciones sin gluten</p>  
     </div>
     
    </div>)
};