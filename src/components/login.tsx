import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/FireBase-Config' // Asegúrate de tener este archivo configurado correctamente

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validar que se haya ingresado el correo y la contraseña
    if (!email || !password) {
      setLoginMessage('Por favor, ingresa el correo y la contraseña.');
      return;
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginMessage('¡Bienvenido a perreo clothes!');
      // Aquí puedes redirigir al usuario a otra página o actualizar el estado global
    } catch (error: any) {
      // Manejar errores específicos
      let errorMessage = '';
  
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Usuario no encontrado. Verifica tu correo.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Contraseña incorrecta. Intenta de nuevo.';
      } else {
        errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
      }
  
      setLoginMessage(errorMessage);
    }
  };


  return (
    <div className="login-container">
    <h1 className='titulo-login'>Iniciar Sesión</h1>
    {loginMessage && <p className=''>{loginMessage}</p>}
    <form onSubmit={handleLogin}>
      <div className="input-group">
        <label htmlFor="email">Correo:     </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña:  </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="custom-button" type="submit">
          Iniciar Sesión
        </button>
    </form>
  </div>
  );
};

export default Login;