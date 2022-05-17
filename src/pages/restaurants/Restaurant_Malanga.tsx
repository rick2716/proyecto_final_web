import imgMalangaMedellin from "../../images/imgMalangaMedellin.png";

export default function Restaurant_TikaDogs(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Malanga del Trópico</h1>
     </div>
     <div className="image">
     <img src={imgMalangaMedellin} alt="" />
     </div>
     <div className="Direccion">
      <p>Calle 38 # 79-46</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 36.885 - $ 81.967 <br />
        -Tipos de comida: Caribeña, Latina, Mariscos, Colombiana, Fusión <br />
        -Dietas especiales: Apto para vegetarianos, Opciones veganas, Opciones sin gluten
        </p>  
     </div>
    </div>)
};