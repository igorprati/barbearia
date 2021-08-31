import React, { useEffect, useState } from "react";
import { mask, unMask } from "remask";
import "./user.scss";

export default function User() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [servico, setServico] = useState("");
  const [status, setStatus] = useState("Agendado");
  const [preco, setPreco] = useState('')

  const [agendamentos, setAgendamentos] = useState([]);

  const agendamento = {
    data: data,
    hora: hora,
    servico: servico,
    preco, preco,
    status: status,
  };

  const precos = {
    "Corte e Barba": "R$30",
    Corte: "R$15",
    Barba: "R$10",
  };

  const valor = () => {
    const newServico = servico.toString();
    setPreco(precos[newServico])
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAgendamentos([...agendamentos, agendamento]);
  };

  const [value, setValue] = useState("");
  const onChange = (e) => {
    const originalValue = unMask(e.target.value);
    const maskedValue = mask(originalValue, ["99/99/9999"]);
    setValue(maskedValue);
    setData(maskedValue);
  };

  useEffect(() => {
    valor()
  }, [servico])

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
                <input
                  type="text"
                  placeholder="00/00/0000"
                  onChange={onChange}
                  value={value}
                />
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
                  {Object.keys(precos).map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="">Valor: </label>
                <input type="text" value={preco} disabled />
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
                  <th>Valor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {agendamentos.map((item) => (
                  <tr key={item.data}>
                    <td>{item.data}</td>
                    <td>{item.hora}</td>
                    <td>{item.servico}</td>
                    <td>{item.preco}</td>
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
