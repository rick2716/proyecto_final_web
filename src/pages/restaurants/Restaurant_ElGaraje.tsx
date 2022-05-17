import imgElGarajeBucaramanga from "../../images/imgElGarajeBucaramanga.png";

export default function Restaurant_ElGaraje(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>El Garaje</h1>
     </div>
     <div className="image">
     <img src={imgElGarajeBucaramanga} alt="" />
     </div>
     <div className="Direccion">
      <p>Calle 48 # 33-39</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 20.492 - $ 40.984 <br />
        -Tipos de comida: Bar, Comida rápida <br />
        -Comidas: Almuerzo, Cena, Abierto hasta tarde, Bebidas
        </p>  
     </div>
    </div>)
};