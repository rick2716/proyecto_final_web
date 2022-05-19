import imgTikaDogsMedellin from "../../images/imgTikaDogsMedellin.png";
import "./restaurants.css"

export default function Restaurant_TikaDogs() {
   return (
      <div className="Container">
         <div className="Title">
            <h1>Tika Dogs Gourmet</h1>
         </div>
         <div className="Image">
            <img src={imgTikaDogsMedellin} alt="" />
         </div>
         <div className="Detail">
            <div className="Adress">
               <p>Carrera 34 # 07-29</p>
            </div>
            <div className="Review">
               <p>Detalles <br />
                  -Precios: $ 16.000 - $ 32.000 <br />
                  -Tipos de comida: Comida rapida <br />
                  -Dietas especiales: Apto para vegetarianos, Opciones veganas.
               </p>
            </div></div>
      </div>)
};