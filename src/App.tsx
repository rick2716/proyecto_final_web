import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Registro from './pages/registro/registro';
  import Login from "./pages/login/login";
  import Principal from "./pages/principal/principal";
  import Restaurant_cali1 from "./pages/restaurants/Restaurant_Mascabado";

  export default function App() {
    return (<BrowserRouter >
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Principal/Restaurante1" element={<Restaurant_cali1 />} />
      </Routes>
    </BrowserRouter >);
  }