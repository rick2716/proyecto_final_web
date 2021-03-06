import { useState, useMemo, FormEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./registro.css";

export default function Registro() {
  const [email, setEmail] = useState([""]);
  const [passwords, setPasswords] = useState(["", ""]);

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

  const canRegister = useMemo(
    () =>
      passwords[0] === passwords[1] &&
      passwords.every((password) => password && password.length > 0) &&
      email.every((email) => email && email.length > 0),
    [email, passwords]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canRegister) return;
    localStorage.setItem('Email', email[0]);
    localStorage.setItem('Password', passwords[0]);
    navigate('/Login');
  };

  return (
    <div className="ContainerRegister">
      <div className="BodyRegister">
        <div className="TitleRegister">
          <h1>Registro</h1>
          <p>Completa todos los campos para continuar</p>
        </div>
        <div className="FormRegister">
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
            <div className="InputForm">
              <label htmlFor="passwordCheck">Confirmar Contraseña </label>
              <br />
              <input
                type="password"
                placeholder="*******"
                value={passwords[1]}
                onInput={(e) => handleInputPassword(e, 1)}
              />
              <p id="TextCheck">
                *Las dos contraseñas tienen que <br />
                coincidir para poder continuar
              </p>
            </div>
            <br />
            <div>
              <button id="ButtonRegister" type="submit" disabled={!canRegister}>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}