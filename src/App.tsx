import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Registro from './pages/registro/registro';
  import Login from "./pages/login/login";
  import Principal from "./pages/principal/principal";

  export default function App() {
    return (<BrowserRouter >
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Principal" element={<Principal />} />
      </Routes>
    </BrowserRouter >);
  }