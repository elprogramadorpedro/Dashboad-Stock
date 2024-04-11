import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Importe seu serviço de autenticação

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // Lógica para chamar API de registro e criar novo usuário
    console.log('Registering:', email, name, password);
    // Substitua pelo seu método de registro, por exemplo:
    // const result = await authService.register(email, name, password);
    // if (result.success) {
    //   navigate('/login'); // Redireciona para o login após registro bem-sucedido
    // }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
      <form onSubmit={handleRegister} style={{ width: '600px', height: '400px', backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ padding: '10px' }} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required style={{ padding: '10px' }} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={{ padding: '10px' }} />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required style={{ padding: '10px' }} />
        <button type="submit" style={{ padding: '10px' }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
