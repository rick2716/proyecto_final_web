import imgFrenessiBogota from "../../images/imgFrenessiBogota.png";

export default function Restaurant_Frenessi(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Frenessí</h1>
     </div>
     <div className="image">
     <img src={imgFrenessiBogota} alt="" />
     </div>
     <div className="Direccion">
      <p>Autopista norte # 114 - 44</p>
     </div>
     <div className="Reseña">
       <p> Detalles <br />
        -Comidas: Almuerzo, Cena<br />
        -Tipos de comida: Bar, Internacional, Contemporánea, Colombiana, Latina, Española <br />
        -Caracteristicas: Reservas, Servicio de mesa, Tarjetas de regalo disponibles
        </p>  
     </div>
    </div>)
};