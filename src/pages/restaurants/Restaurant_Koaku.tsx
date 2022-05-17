import imgKoakuCartagena from "../../images/imgKoakuCartagena.png";

export default function Restaurant_Koaku(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Restaurante Kokaú</h1>
     </div>
     <div className="image">
     <img src={imgKoakuCartagena} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 01 # 12-118</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Comidas: Desayuno, Cena, Brunch <br />
        -Tipos de comida: Mediterránea, Colombiana<br />
        -Dietas especiales: Apto para vegetarianos, Opciones veganas, Opciones sin gluten
        </p>  
     </div>
    </div>)
};