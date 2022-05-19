import img1622Bucaramanga from "../../images/img1622Bucaramanga.png";
import "./restaurants.css"

export default function Restaurant_1622() {
   return (
      <div className="Container">
         <div className="Title">
            <h1>Restaurante 1622</h1>
         </div>
         <div className="Image">
            <img src={img1622Bucaramanga} alt="" />
         </div>
         <div className="Detail">
            <div className="Adress">
               <p>Transversal oriental, hotel holiday Inn</p>
            </div>
            <div className="Review">
               <p>Detalles <br />
                  -Precios: $ 49.180 - $ 225.410 <br />
                  -Tipos de comida: Fusión, Internacional <br />
                  -Dieta especiales: Apto para vegetarianos
               </p>
            </div>
         </div>
      </div>)
};