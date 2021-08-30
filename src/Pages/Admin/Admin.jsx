import React from "react";
import "./admin.scss";

export default function Admin() {
  return (
    <section className="admin">
      <header className="admin__header">
        <div className="admin__header__bg"></div>
        <div className="container">
          <p>Olá, Igor!</p>
          <h1>Agendamentos</h1>
        </div>
      </header>

      <main className="admin__main">
        <div className="container">
          

          <div className="admin__main__agendamentos">
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
