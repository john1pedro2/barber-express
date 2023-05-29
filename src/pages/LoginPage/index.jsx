import { CiMail } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";

import './style.css'

const LoginPage = () => {
return(
  <>
  <div className="loginContainer">
    <h1 className="Header">SmartBarber - Espaço VIP</h1>
    <div className="loginBackgroundContainer">
        <div className="loginFormContainer">
            <div className="loginTitle">
              <p>Login</p>
            </div>

            <div className="loginInputContainer">
              
            <label className="loginInputWrapper" htmlFor="email">
              <i><CiMail size={24} color='#26262699'/></i>
              <input
              placeholder="E-mail"
              type="email"
              name="email"
              id="email">
              </input>
            </label>

            <label className="loginInputWrapper" htmlFor="password">
              <i><MdOutlinePassword size={24} color='#26262699'/></i>
              <input
              placeholder="Senha"
              type="password"
              name="password"
              id="password">
              </input>
            </label>
        
            <div className="loginActionsContainer">
              <a href="/home"><button>Login</button></a>
              <a href="/register">ou Cadastre-se</a>
            </div>
          </div>
        </div>
      </div>
  </div>
  </>
);
}

export default LoginPage;