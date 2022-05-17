import imgTratoria from "../../images/imgTratoria.png";

export default function Restaurant_trattoria(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Trattoria Italia</h1>
     </div>
     <div className="image">
     <img src={imgTratoria} alt="" />
     </div>
     <div className="Direccion">
      <p>Avenida 9 norte # 17N - 11</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Rango de precios: $ 28.689 - $ 81.967 <br />
        -Tipos de comida: Italiana, Mediterránea, Europeaón. <br />
        -Dietas especiales: Apto para vegetarianos.</p>  
     </div>
     
    </div>)
};