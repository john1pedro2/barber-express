import React, { useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';

import { HiOutlineCalendarDays } from "react-icons/hi2";
import { CiStopwatch, CiRollingSuitcase } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import './style.css'

const SchedulePage = () => {
  const [date, setDate] = useState('');
  const [hora, setHora] = useState('');
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [formValid, setFormValid] = useState(false);

  const props = {
    date: date,
    hora: hora,
    service: service,
    barber: barber
  };

  const handleSchedule = () => {
    const data = {
      date: date,
      hora: hora,
      service: service,
      barber: barber
    };

    axios.post('http://localhost:3000/appointment', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const validateForm = () => {
    if (date !== '' && hora !== '' && service !== '' && barber !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };
  
  const handleChangeDate = (e) => {
    const value = e.target.value;
    setDate(value);
    validateForm();
  };
  
  const handleChangeHora = (e) => {
    const value = e.target.value;
    setHora(value);
    validateForm();
  };
  
  const handleChangeService = (e) => {
    const value = e.target.value;
    setService(value);
    validateForm();
  };
  
  const handleChangeBarber = (e) => {
    const value = e.target.value;
    setBarber(value);
    validateForm();
  };

  return (
    <>
      <Navbar />
      <div className="scheduleContainer">
        <div className="scheduleFormContainer">
          <div className="scheduleTitle">
            <p>Agendar Horário</p>
          </div>
          <div className="scheduleInputContainer">
            <label className="scheduleInputWrapper" htmlFor="date">
              <i>
                <HiOutlineCalendarDays size={24} color="#26262699" />
              </i>
              <input
                placeholder="Informe a data"
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleChangeDate}
                required
              />
            </label>

            <label className="scheduleInputWrapper" htmlFor="hora">
              <i>
                <CiStopwatch size={24} color="#26262699" />
              </i>
              <select
                name="hora"
                id="hora"
                value={hora}
                onChange={handleChangeHora}
                required
              >
                <option disabled value="">
                  Informe a hora
                </option>
                <option value="6h">6h</option>
                <option value="7h">7h</option>
                <option value="8h">8h</option>
                <option value="9h">9h</option>
                <option value="10h">10h</option>
                <option value="11h">11h</option>
                <option value="12h">12h</option>
              </select>
            </label>

            <label className="scheduleInputWrapper" htmlFor="service">
              <i>
                <CiRollingSuitcase size={24} color="#26262699" />
              </i>
              <select
                name="service"
                id="service"
                value={service}
                onChange={handleChangeService}
                required
              >
                <option disabled value="">
                  Informe o serviço
                </option>
                <option value="cabelo">Cabelo</option>
                <option value="Barba">Barba</option>
                <option value="Cabelo+Barba">Cabelo + Barba</option>
              </select>
            </label>

            <label className="scheduleInputWrapper" htmlFor="barber">
              <i>
                <CgProfile size={24} color="#26262699" />
              </i>
              <select
                name="barber"
                id="barber"
                value={barber}
                onChange={handleChangeBarber}
                required
              >
                <option disabled value="">
                  Informe o Barbeiro
                </option>
                <option value="John Doe">John Doe</option>
              </select>
            </label>

            <div className="scheduleActionsContainer">
              <Link
                to={{
                  pathname: '/scheduleConfirm',
                  state: props,
                }}
              >
                <button
                  onClick={handleSchedule}
                  disabled={!formValid}
                >
                  Agendar
                </button>
              </Link>
              <a href="/home">
                <button id="last">Cancelar</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchedulePage;  