import React, { useState } from "react";
import "./user.scss";

export default function User() {
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

            <form>
              <div className="field">
                <label htmlFor="">Data: </label>
                <input type="date" />
              </div>

              <div className="field">
                <label htmlFor="">Hora: </label>
                <input type="time" />
              </div>

              <div className="field">
                <label htmlFor="">Serviço: </label>
                <input type="text" />
              </div>

              <button>Agendar</button>
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
                <tr>
                  <td>30/08/2021</td>
                  <td>15:40</td>
                  <td>Corte e barba</td>
                  <td>Marcado</td>
                </tr>

                <tr>
                  <td>31/08/2021</td>
                  <td>14:10</td>
                  <td>Corte</td>
                  <td>Concluído</td>
                </tr>

                <tr>
                  <td>29/08/2021</td>
                  <td>15:15</td>
                  <td>Barba</td>
                  <td>Cancelado</td>
                </tr>

                <tr>
                  <td>30/08/2021</td>
                  <td>10:50</td>
                  <td>Corte e barba</td>
                  <td>Concluído</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  );
}
