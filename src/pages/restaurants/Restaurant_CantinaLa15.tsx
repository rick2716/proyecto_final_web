import imgCantinala15Bogota from "../../images/imgCantinala15Bogota.png";

export default function Restaurant_CantinaLa15(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Cantina la 15</h1>
     </div>
     <div className="image">
     <img src={imgCantinala15Bogota} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 13 # 83 - 57</p>
     </div>
     <div className="Reseña">
       <p> Detalles <br />
        -Precio: $30.000-$200.000<br />
        -Tipos de comida: Mexicana, Latina, Bar, Centroamericana, Parrilla <br />
        -Dietas especiales: Opciones veganas
        </p>  
     </div>
    </div>)
};