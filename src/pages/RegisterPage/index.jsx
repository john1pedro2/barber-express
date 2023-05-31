import { CiMail } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";

import './style.css'

const RegisterPage = () => {
return(
  <>
  <div className="registerContainer">
    <h1 className="registerHeader">SmartBarber - Espaço VIP</h1>
    <div className="registerBackgroundContainer">
        <div className="registerFormContainer">
          <div className="registerTitle">
            <p>Registre-se</p>
          </div>
          <div className="registerInputContainer">
            
          <label className="registerInputWrapper" htmlFor="name">
            <i><CgProfile size={24} color='#26262699'/></i>
            <input
            placeholder="Informe seu nome"
            type="text"
            name="name"
            id="name"
            />
          </label>

          <label className="registerInputWrapper" htmlFor="email">
            <i><CiMail size={24} color='#26262699'/></i>
            <input
            placeholder="Informe seu e-mail"
            type="email"
            name="email"
            id="email">
            </input>
          </label>

          <label className="registerInputWrapper" htmlFor="password">
            <i><MdOutlinePassword size={24} color='#26262699'/></i>
            <input
            placeholder="Informe sua senha"
            type="password"
            name="password"
            id="password">
            </input>
          </label>

          <label className="registerInputWrapper" htmlFor="password2">
            <i><MdOutlinePassword size={24} color='#26262699'/></i>
            <input
            placeholder="Confirme sua senha"
            type="password"
            name="password2"
            id="password2">
            </input>
          </label>
        
          <div className="registerActionsContainer">
            <a href="/"><button>Cadastre-se</button></a>
            <a href="/">já possui cadastro? Entre</a>
          </div>
          </div>
        </div>
      </div>
  </div>
  </>
);
}

export default RegisterPage;