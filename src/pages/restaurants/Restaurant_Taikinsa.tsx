import imgTaikinsaBucaramanga from "../../images/imgTaikinsaBucaramanga.png";

export default function Restaurant_Taikinsa(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Taikinsa</h1>
     </div>
     <div className="image">
     <img src={imgTaikinsaBucaramanga} alt="" />
     </div>
     <div className="Direccion">
      <p>Calle 47 # 28-83</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 38.098 - $ 79.372 <br />
        -Tipos de comida: Fusión, Sushi, Japonesa, Mediterránea, Europea, De Asia central <br />
        -Comidas: Almuerzo, Cena, Abierto hasta tarde, Bebidas
        </p>  
     </div>
    </div>)
};