import { useState, useMemo, FormEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState([""]);
  const [passwords, setPasswords] = useState([""]);

  let navigate : NavigateFunction = useNavigate();

  const handleInputPassword = (
    event: FormEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPasswords = [...passwords];
    newPasswords.splice(index, 1, event.currentTarget.value);
    setPasswords(newPasswords);
  };

  const handleInputEmail = (
    event: FormEvent<HTMLInputElement>,
    index: number
  ) => {
    const newEmail = [...email];
    newEmail.splice(index, 1, event.currentTarget.value);
    setEmail(newEmail);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localStorage.getItem("Email")===email[0]){
      if (localStorage.getItem("Password")===passwords[0]){
        navigate('/Principal');
        console.log("Funcione saposaposaposaposaposaposaposaposapo")
      }
    }
    
  };

  return (
    <div className="Container">
      <div className="Body">
        <div className="Title">
          <h1>Iniciar sesion</h1>
          <p>Completa todos los campos para continuar</p>
        </div>
        <div className="Formulario">
          <form onSubmit={handleSubmit}>
            <div className="InputForm">
              <label htmlFor="correo">Correo </label> <br />
              <input
                type="text"
                placeholder="example@example.com"
                value={email[0]}
                onInput={(e) => handleInputEmail(e, 0)}
              />
            </div>
            <div className="InputForm">
              <label htmlFor="password">Contraseña </label> <br />
              <input
                type="password"
                placeholder="*******"
                value={passwords[0]}
                onInput={(e) => handleInputPassword(e, 0)}
              />
            </div>
            <br />
            <div>
              <button id="BotoLogin" type="submit">
                Iniciar sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}