import Navbar from '../../components/Navbar/Navbar'

import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { CiStopwatch, CiRollingSuitcase } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'

import './style.css'

const SchedulePage = () => {
  return (
    <>
      <Navbar />
      <div className='scheduleContainer'>
        <div className='scheduleFormContainer'>
          <div className='scheduleTitle'>
            <p>Agendar Horário</p>
          </div>
          <div className='scheduleInputContainer'>
            <label className='scheduleInputWrapper' htmlFor='date'>
              <i>
                <HiOutlineCalendarDays size={24} color='#26262699' />
              </i>
              <input
                placeholder='Informe a data'
                type='date'
                name='date'
                id='date'
              />
            </label>

            <label className='scheduleInputWrapper' htmlFor='hora'>
              <i>
                <CiStopwatch size={24} color='#26262699' />
              </i>
              <select name='hora' id='hora'>
                <option placeholder>Informe o horário</option>
                <option value='6h'>6h</option>
                <option value='7h'>7h</option>
                <option value='8h'>8h</option>
                <option value='9h'>9h</option>
                <option value='10h'>10h</option>
                <option value='11h'>11h</option>
                <option value='12h'>12h</option>
              </select>
            </label>

            <label className='scheduleInputWrapper' htmlFor='service'>
              <i>
                <CiRollingSuitcase size={24} color='#26262699' />
              </i>
              <select name='service' id='service'>
                <option placeholder>Informe o serviço</option>
                <option value='cabelo'>Cabelo</option>
                <option value='Barba'>Barba</option>
                <option value='Cabelo+Barba'>Cabelo + Barba</option>
              </select>
            </label>

            <label className='scheduleInputWrapper' htmlFor='barber'>
              <i>
                <CgProfile size={24} color='#26262699' />
              </i>
              <select name='barber' id='barber'>
                <option placeholder>Informe o barbeiro</option>
                <option value='Allan Dayan'>John Doe</option>
              </select>
            </label>

            <div className='scheduleActionsContainer'>
              <a href='/scheduleConfirm'>
                <button>Agendar</button>
              </a>
              <a href='/home'>
                <button id='last'>Cancelar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchedulePage
