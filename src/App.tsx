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
import Restaurant_market from "./pages/restaurants/Restaurant_Market";
import Restaurant_trattoria from "./pages/restaurants/Restaurant_Trattoria";
import Restaurant_CafeSanAlberto from "./pages/restaurants/Restaurant_CafeSanAlberto";
import Restaurant_CantinaLa15 from "./pages/restaurants/Restaurant_CantinaLa15";
import Restaurant_Frenessi from "./pages/restaurants/Restaurant_Frenessi";
import Restaurant_Ammazza from "./pages/restaurants/Restaurant_Ammazza";
import Restaurant_Barbaro from "./pages/restaurants/Restaurant_Barbaro";
import Restaurant_Malanga from "./pages/restaurants/Restaurant_Malanga";
import Restaurant_TikaDogs from "./pages/restaurants/Restaurant_TikaDogs";
import Restaurant_Koaku from "./pages/restaurants/Restaurant_Koaku";
import Restaurant_MarZielo from "./pages/restaurants/Restaurant_MarZielo";
import Restaurant_SteakHouse from "./pages/restaurants/Restaurant_SteakHouse";
import Restaurant_Tacna from "./pages/restaurants/Restaurant_Tacna";
import Restaurant_ElGaraje from "./pages/restaurants/Restaurant_ElGaraje";
import Restaurant_MaizPelao from "./pages/restaurants/Restaurant_MaizPelao";
import Restaurant_Taikinsa from "./pages/restaurants/Restaurant_Taikinsa";
import Restaurant_Capitalino from "./pages/restaurants/Restaurant_Capitalino";

export default function App() {
  return (<BrowserRouter >
    <Routes>
      <Route path="/" element={<Registro />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Principal" element={<Principal />} />
      <Route path="/Principal/Restaurant_Mascabado" element={<Restaurant_cali1 />} />
      <Route path="/Principal/Restaurant_1622" element={<Restaurant_1622 />} />
      <Route path="/Principal/Restaurant_Botanico" element={<Restaurant_Botanico />} />
      <Route path="/Principal/Restaurant_Market" element={<Restaurant_market />} />
      <Route path="/Principal/Restaurant_Trattoria" element={<Restaurant_trattoria />} />
      <Route path="/Principal/Restaurant_CafeSanAlberto" element={<Restaurant_CafeSanAlberto />} />
      <Route path="/Principal/Restaurant_CantinaLa15" element={<Restaurant_CantinaLa15 />} />
      <Route path="/Principal/Restaurant_Frenessi" element={<Restaurant_Frenessi />} />
      <Route path="/Principal/Restaurant_Ammazza" element={<Restaurant_Ammazza />} />
      <Route path="/Principal/Restaurant_Barbaro" element={<Restaurant_Barbaro />} />
      <Route path="/Principal/Restaurant_Malanga" element={<Restaurant_Malanga />} />
      <Route path="/Principal/Restaurant_TikaDogs" element={<Restaurant_TikaDogs />} />
      <Route path="/Principal/Restaurant_Koaku" element={<Restaurant_Koaku />} />
      <Route path="/Principal/Restaurant_MarZielo" element={<Restaurant_MarZielo />} />
      <Route path="/Principal/Restaurant_SteakHouse" element={<Restaurant_SteakHouse />} />
      <Route path="/Principal/Restaurant_Tacna" element={<Restaurant_Tacna />} />
      <Route path="/Principal/Restaurant_ElGaraje" element={<Restaurant_ElGaraje />} />
      <Route path="/Principal/Restaurant_MaizPelao" element={<Restaurant_MaizPelao />} />
      <Route path="/Principal/Restaurant_Taikinsa" element={<Restaurant_Taikinsa />} />
      <Route path="/Principal/Restaurant_Capitalino" element={<Restaurant_Capitalino />} />
    </Routes>
  </BrowserRouter >);
}