import imgMarZieloCartagena from "../../images/imgMarZieloCartagena.png";

export default function Restaurant_MarZielo(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Mar Y Zielo Gastro-Bar</h1>
     </div>
     <div className="image">
     <img src={imgMarZieloCartagena} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 05 # 34-63</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 140.000 - $ 280.000 <br />
        -Tipos de comida: Caribeña, Latina, Mariscos, Internacional.
        </p>  
     </div>
    </div>)
};