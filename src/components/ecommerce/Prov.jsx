import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); // Estado para manejar mensajes de error
  const navigate = useNavigate(); // Hook para la navegación

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula la verificación de credenciales (deberías reemplazar esto con tu lógica de autenticación)
    if (user.email === "ejemplo@correo.com" && user.password === "contraseña123") {
      localStorage.setItem('user', JSON.stringify(user)); // Guarda el usuario en localStorage
      navigate('/dashboard'); // Redirige al usuario al dashboard
    } else {
      setError('Email o contraseña incorrecta.'); // Muestra un mensaje de error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={user.password}
        onChange={handleChange}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra errores si los hay */}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
