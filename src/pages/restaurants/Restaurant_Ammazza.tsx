import imgAmmazzaMedellin from "../../images/imgAmmazzaMedellin.png";

export default function Restaurant_Ammazza(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Ammazza Gin Garden</h1>
     </div>
     <div className="image">
     <img src={imgAmmazzaMedellin} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 76 # 73B-1</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 40.984 - $ 102.459 <br />
        -Tipos de comida: Italiana, Bar, Pizzería, Mediterránea <br />
        -Dietas especiales: Apto para vegetarianos, Opciones veganas, Opciones sin gluten
        </p>  
     </div>
    </div>)
};