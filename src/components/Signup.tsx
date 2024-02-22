import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/FireBase-Config'; // Asegúrate de tener este archivo configurado correctamente

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Inicio de sesión exitoso.');
      // Aquí puedes redirigir al usuario a otra página o actualizar el estado global
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Registro exitoso.');
      // Aquí puedes realizar acciones después del registro, como redirigir o actualizar el estado global
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="login-container">
    <h1 className='titulo-login'>Registrate</h1>
    {message && <p className='mensage-error'>{message}</p>}
    <form onSubmit={handleLogin} className="form">
      <div className="input-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSignUp} className="custom-button">Registrarse</button>
    </form>
  </div>
);
};

export default Register;
