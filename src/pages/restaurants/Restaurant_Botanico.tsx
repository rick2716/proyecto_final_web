import imgBotanicoCali from "../../images/imgBotanicoCali.png";
import "./restaurants.css"

export default function Restaurant_Botanico(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Botánico Cultura Del Licor</h1>
     </div>
     <div className="Image">
     <img src={imgBotanicoCali} alt="" />
     </div>
     <div className="Adress">
      <p>Avenida 9 norte # 10-32</p>
     </div>
     <div className="Review">
       <p>Detalles <br />
        -Tipos de comida: Bar, Delicatessen, Pub, Bar de vinos <br />
        -Dietas especiales: Cena, Abierto hasta tarde, Bebidas <br />
        -Caracteristicas: Entrega a domicilio, Comida para llevar, Reservas, Asientos al aire libre, Asiento, Estacionamiento en la calle, Estacionamiento privado gratis, Televisión, Sillitas altas disponibles, Sirve alcohol, Bar completo, Vino y cerveza, Wi-Fi gratis, Acepta tarjetas de crédito, Servicio de mesa, Apto para perros.
        </p>  
     </div>
     
    </div>)
};