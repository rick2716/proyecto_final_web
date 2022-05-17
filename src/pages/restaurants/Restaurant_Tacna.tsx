import imgTacnaCartagena from "../../images/imgTacnaCartagena.png";

export default function Restaurant_Tacna(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Tacna Restaurant</h1>
     </div>
     <div className="image">
     <img src={imgTacnaCartagena} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 03 # 06-102</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 24.000 - $ 60.000<br />
        -Tipos de comida: Caribeña, Latina, Mariscos, Saludable, Colombiana, Fusión <br />
        -Dietas especiales: Apto para vegetarianos
        </p>  
     </div>
    </div>)
};