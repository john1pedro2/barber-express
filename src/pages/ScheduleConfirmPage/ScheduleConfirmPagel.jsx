import { useLocation } from 'react-router-dom';

import './style.css'

const ScheduleConfirmPage = () => {
  const location = useLocation();
  const { date, hora, service, barber } = location.state;

  return (
    <div className="scheduleModalContainer">
      <div className="scheduleModalBackground">
        <p>Horário Confirmado!</p>
        <p>Data: {date}</p>
        <p>Horário: {hora}</p>
        <p>Serviço: {service}</p>
        <p>Barbeiro: {barber}</p>
        <a href="/home"><button>Retornar ao Início</button></a>
      </div>
    </div>
  )
}

export default ScheduleConfirmPage;
