import imgCafeSanAlbertoBogota from "../../images/imgCafeSanAlbertoBogota.png";

export default function Restaurant_CafeSanAlberto(){
 return (
    <div className="Container">
     <div className="Title">
        <h1>Café San Alberto Centro De Bogotá</h1>
     </div>
     <div className="image">
     <img src={imgCafeSanAlbertoBogota} alt="" />
     </div>
     <div className="Direccion">
      <p>Carrera 7 # 16-36, local 1</p>
     </div>
     <div className="Reseña">
       <p>Detalles <br />
        -Precios: $ 6.000 - $ 20.000 <br />
        -Tipos de comida: Café, Comida rápida, Internacional, Sudamericana, Colombiana <br />
        -Comidas: Desayuno, Almuerzo, Bebidas
        </p>  
     </div>
    </div>)
};