import React, { useState } from "react";
import  { mask, unMask } from 'remask';
import "./user.scss";

export default function User() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [servico, setServico] = useState("");
  const [status, setStatus] = useState("Agendado");

  const [agendamentos, setAgendamentos] = useState([]);

  const agendamento = {
    data: data,
    hora: hora,
    servico: servico,
    status: status,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAgendamentos([...agendamentos, agendamento]);
  };

  const [value, setValue] = useState('')
  const onChange = (e) => {
    const originalValue = unMask(e.target.value)
    const maskedValue = mask(originalValue, ["99/99/9999"])
    setValue(maskedValue)
    setData(maskedValue)
  }

  return (
    <section className="user">
      <header className="user__header">
        <div className="user__header__bg"></div>
        <div className="container">
          <p>Olá, Igor!</p>
          <h1>Agendamentos</h1>
        </div>
      </header>

      <main className="user__main">
        <div className="container">
          <div className="user__main__agendar">
            <h3 className="title">Agendar Serviço</h3>

            <form onSubmit={submitHandler}>
              <div className="field">
                <label htmlFor="">Data: </label>
                <input type='text' placeholder='00/00/0000' onChange={onChange} value={value} />
              </div>

              <div className="field">
                <label htmlFor="">Hora: </label>
                <input type="time" onChange={(e) => setHora(e.target.value)} />
              </div>

              <div className="field">
                <label htmlFor="">Serviço: </label>
                <select
                  name="servico"
                  id="servico"
                  onChange={(e) => setServico(e.target.value)}
                >
                  <option value="Selecione um serviço" hidden>
                    Selecione um serviço
                  </option>
                  <option value="Corte e Barba">Corte e Barba</option>
                  <option value="Corte">Corte</option>
                  <option value="Barba">Barba</option>
                </select>
              </div>

              <button type="submit">Agendar</button>
            </form>
          </div>

          <div className="user__main__agendamentos">
            <h3 className="title">Ver agendamentos</h3>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Serviço</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {agendamentos.map((item) => (
                  <tr key={item.data}>
                    <td>{item.data}</td>
                    <td>{item.hora}</td>
                    <td>{item.servico}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  );
}
