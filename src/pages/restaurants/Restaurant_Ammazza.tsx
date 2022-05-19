import imgAmmazzaMedellin from "../../images/imgAmmazzaMedellin.png";
import "./restaurants.css"

export default function Restaurant_Ammazza() {
   return (
      <div className="Container">
         <div className="Title">
            <h1>Ammazza Gin Garden</h1>
         </div>
         <div className="Image">
            <img src={imgAmmazzaMedellin} alt="" />
         </div>
         <div className="Detail">
            <div className="Adress">
               <p>Carrera 76 # 73B-01</p>
            </div>
            <div className="Review">
               <p>Detalles <br />
                  -Precios: $ 40.984 - $ 102.459 <br />
                  -Tipos de comida: Italiana, Bar, Pizzería, Mediterránea <br />
                  -Dietas especiales: Apto para vegetarianos, Opciones veganas, Opciones sin gluten
               </p>
            </div>
         </div>
      </div>)
};