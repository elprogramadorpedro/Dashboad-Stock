import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importe seu serviço de autenticação

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Lógica para chamar API de login e autenticar usuário
    console.log('Authenticating:', email, password);
    // Substitua pelo seu método de autenticação, por exemplo:
    // const result = await authService.login(email, password);
    // if (result.authenticated) {
    //   navigate('/dashboard'); // Substitua pelo caminho após login
    // }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
      <form onSubmit={handleLogin} style={{ width: '600px', height: '400px', backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ padding: '10px' }} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '10px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
