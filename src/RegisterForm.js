// RegisterForm.js

import React, { useState } from 'react';
import './RegisterForm.css'; // Importa el archivo CSS
import logo from './Img/logo.png';
const RegisterForm = () => {
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const verificarExistenciaUsuario = (correoUsuario) => {
    return usuariosRegistrados.some((usuario) => usuario.correo === correoUsuario);
  };

  const registrarUsuario = () => {
    const correoUsuario = document.getElementById("correoUsuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;

    if (verificarExistenciaUsuario(correoUsuario)) {
      alert("Este correo electrónico o nombre de usuario ya está registrado. Por favor, intenta con otro.");
    } else if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden. Por favor, verifica tu contraseña.");
    } else {
      // Mostrar mensaje de éxito o realizar otras acciones necesarias
      console.log("Usuario registrado:", correoUsuario);
      setUsuariosRegistrados([...usuariosRegistrados, { correo: correoUsuario, contrasena }]);
    }
  };

  return (
    <div className="gradiente-fondo">
      <div className="bg-white">
        <img src={logo} alt="Logo" />
        <h2 className="fw-bold">Registro de Usuario</h2>
        <p>¿Realmente estás registrado? <a href="#">Iniciar sesión</a></p>
        <input type="text" placeholder="Nombres" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
        <input type="text" placeholder="Correo electrónico" id="correoUsuario" />
        <input type="password" placeholder="Contraseña" id="contrasena" />
        <input type="password" placeholder="Confirmar contraseña" id="confirmarContrasena" />
        <div className="box-fecha-nacimiento">
          <label>Fecha de nacimiento:</label>
          <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </div>
        <label className="aceptar-terminos">
          <input type="checkbox" checked={aceptaTerminos} onChange={() => setAceptaTerminos(!aceptaTerminos)} />
          Acepto términos y condiciones
        </label>
        <button className="btn-registrarse" onClick={registrarUsuario}>Registrarse</button>
        <div className="footer">T© 2024 Social Pets. Todos los derechos reservados.</div>
      </div>
    </div>
  );
};

export default RegisterForm;
