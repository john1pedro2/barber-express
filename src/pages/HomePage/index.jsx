import Navbar from '../../components/Navbar/Navbar'

import './style.css'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='homePageContainer'>
        <h2>Horário de funcionamento</h2>
        <table>
          <tr>
            <th>Segunda à Quinta</th>
            <th>Sexta e Sábado</th>
            <th>Domingos</th>
          </tr>
          <tr>
            <td>9h até 18h</td>
            <td>6h até 18h</td>
            <td>8h30 até 12h</td>
          </tr>
        </table>
        <h2>Serviços</h2>
        <p>
          Atualmente estamos realizando os seguintes serviços: corte de cabelo,
          barba, sobrancelha com ou sem hena e manutenção de dread.
        </p>
        <br />
        <p>
          Para agendar seu horário basta clicar no botão abaixo e preencher o
          formulário.
        </p>
        <a href='/schedule'>
          <button>Agendar Horário</button>
        </a>
      </div>
    </>
  )
}

export default HomePage
