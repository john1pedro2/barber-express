import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiMail } from 'react-icons/ci';
import { MdOutlinePassword } from 'react-icons/md';
import './style.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        navigate('/home');
      } else {
        console.log('Login falhou');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="loginContainer">
      <h1 className="loginHeader">SmartBarber - Espaço VIP</h1>
      <div className="loginBackgroundContainer">
        <div className="loginFormContainer">
          <div className="loginTitle">
            <p>Login</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="loginInputContainer">
              <label className="loginInputWrapper" htmlFor="email">
                <i>
                  <CiMail size={24} color="#26262699" />
                </i>
                <input
                  required
                  value={email}
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="loginInputWrapper" htmlFor="password">
                <i>
                  <MdOutlinePassword size={24} color="#26262699" />
                </i>
                <input
                  required
                  value={password}
                  placeholder="Senha"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="loginActionsContainer">
                <button type="submit">Login</button>
                <a href="/register">ou Cadastre-se</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;