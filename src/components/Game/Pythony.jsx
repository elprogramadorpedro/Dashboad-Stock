import { useState } from 'react';

function SignUp() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías añadir la lógica para manejar el registro del usuario
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar Contraseña"
        value={user.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default SignUp;
