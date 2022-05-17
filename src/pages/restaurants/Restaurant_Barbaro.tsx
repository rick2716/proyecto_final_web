import imgBarbaroMedellin from "../../images/imgBarbaroMedellin.png";

export default function Restaurant_Barbaro(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Bárbaro Cocina Primitiva</h1>
     </div>
     <div className="image">
     <img src={imgBarbaroMedellin} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 37 # 10A-23</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 30.000 - $ 40.000 <br />
        -Tipos de comida: Estadounidense, Churrasquería, Parrillada, Parrilla, Argentina <br />
        -Dietas especiales: Apto para vegetarianos, Opciones sin gluten
        </p>  
     </div>
    </div>)
};