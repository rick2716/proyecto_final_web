import imgSteakHouseCartagena from "../../images/imgSteakHouseCartagena.png";

export default function Restaurant_SteakHouse(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Porthos Steakhouse and Pub Cartagena</h1>
     </div>
     <div className="image">
     <img src={imgSteakHouseCartagena} alt="" />
     </div>
     <div className="Direccion">
      <p>Calle 35 # 05-19</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 28.689 - $ 118.852 <br />
        -Tipos de comida: Cervecería, Bar, Parrillada, Pub, Gastropub <br />
        -Comidas: Almuerzo, Cena, Abierto hasta tarde, Bebidas
        </p>  
     </div>
    </div>)
};