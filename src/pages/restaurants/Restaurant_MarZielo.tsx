import imgMarZieloCartagena from "../../images/imgMarZieloCartagena.png";
import "./restaurants.css"

export default function Restaurant_MarZielo() {
   return (
      <div className="Container">
         <div className="Title">
            <h1>Mar Y Zielo Gastro-Bar</h1>
         </div>
         <div className="Image">
            <img src={imgMarZieloCartagena} alt="" />
         </div>
         <div className="Detail">
            <div className="Adress">
               <p>Carrera 05 # 34-63</p>
            </div>
            <div className="Review">
               <p>Detalles <br />
                  -Precios: $ 140.000 - $ 280.000 <br />
                  -Tipos de comida: Caribeña, Latina, Mariscos, Internacional.
               </p>
            </div>
         </div>

      </div>)
};