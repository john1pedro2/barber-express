import './style.css'

const ScheduleConfirmPage = () => {
  return (
    <div className="scheduleModalContainer">
      <div className="scheduleModalBackground">
        <p>Horário Confirmado!</p>
        <p>Data: 29/05/2023</p>
        <p>Horário: 17h00</p>
        <p>Serviço: Corte de cabelo e barba</p>
        <p>Barbeiro: John Doe</p>
        <a href="/home"><button>Retornar ao Início</button></a>
      </div>
    </div>
  )
}

export default ScheduleConfirmPage;
