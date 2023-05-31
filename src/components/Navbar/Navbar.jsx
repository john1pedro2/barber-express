import './style.css'

import Logo from '../../assets/logo.jpeg'

const Navbar = () => {
  return(
    <div className="navbarContainer">
      <img src={Logo} alt="Espaço vip logo" />
      <a href="/home"><h2 className='navbarTitle'>Espaço VIP Barbershop</h2></a>
      <a href="/home">Página Inicial</a>
      <a href="/schedule">Agendar Horário</a>
      <a href="/">Sair</a>
    </div>
  );
  }
  
  export default Navbar;