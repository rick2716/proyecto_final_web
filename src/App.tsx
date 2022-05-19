import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Registro from './pages/registro/registro';
  import Login from "./pages/login/login";
  import Principal from "./pages/principal/principal";
  import Restaurant_cali1 from "./pages/restaurants/Restaurant_Mascabado";
  import Restaurant_1622 from "./pages/restaurants/Restaurant_1622";
  import Restaurant_Botanico from "./pages/restaurants/Restaurant_Botanico";

  export default function App() {
    return (<BrowserRouter >
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Principal/Restaurant_Mascabado" element={<Restaurant_cali1 />} />
        <Route path="/Principal/Restaurant_1622" element={<Restaurant_1622 />} />
        <Route path="/Principal/Restaurant_Botanico" element={<Restaurant_Botanico />} />
      </Routes>
    </BrowserRouter >);
  }