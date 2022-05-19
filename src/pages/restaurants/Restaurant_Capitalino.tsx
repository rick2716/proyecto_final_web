import imgCapitalinoBogota from "../../images/impCapitalinoBogota.png";

export default function Restaurant_Capitalino(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Capitalino Restaurant</h1>
     </div>
     <div className="image">
     <img src={imgCapitalinoBogota} alt="" />
     </div>
     <div className="Direccion">
      <p>Calle 24a # 57-60</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 26.000 - $ 56.000 <br />
        -Tipos de comida: Saludable, Colombiana, Internacional <br />
        -Dietas especiales: Opciones veganas
        </p>  
     </div>
    </div>)
};