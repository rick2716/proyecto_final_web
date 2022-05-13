import { useState, useEffect, useMemo, FormEvent } from "react";
import "./registro.css";

export default function Registro() {
  const [email, setEmail] = useState([""]);
  const [passwords, setPasswords] = useState(["", ""]);

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

  return (
    <div className="Container">
      <div className="Header">
        <h1>Registro</h1>
        <p>Completa todos los campos para continuar</p>
      </div>
      <div className="Body">
        <div className="Formulario">
          <form>
            <div>
              <label htmlFor="correo">Correo </label> <br />
              <input
                type="text"
                placeholder="example@example.com"
                value={email[0]}
                onInput={(e) => handleInputEmail(e, 0)}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña </label> <br />
              <input
                type="password"
                placeholder="*******"
                value={passwords[0]}
                onInput={(e) => handleInputPassword(e, 0)}
              />
            </div>
            <div>
              <label htmlFor="passwordCheck">Confirmar Contraseña </label>
              <br />
              <input
                type="password"
                placeholder="*******"
                value={passwords[1]}
                onInput={(e) => handleInputPassword(e, 1)}
              />
            </div>
            <br />
            <div>
              <button type="submit" disabled={!canRegister}>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}