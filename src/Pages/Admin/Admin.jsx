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
          <h3 className="title">Todos os Agendamentos</h3>

          <p>Buscar:</p>
          <input type="text" id="buscar" />

          <p id="filtrar">Filtrar por:</p>
          <button>CPF</button>
          <button>Nome</button>
          <button>Data</button>
          <button>Hora</button>

          <div className="admin__main__agendamentos">
            <table>
              <thead>
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Serviço</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>163.171.757-05</td>
                  <td>Igor Prati</td>
                  <td>30/08/2021</td>
                  <td>15:40</td>
                  <td>Corte e barba</td>
                  <td>Marcado</td>
                </tr>

                <tr>
                  <td>543.452.732-87</td>
                  <td>Rodrigo Silva</td>
                  <td>31/08/2021</td>
                  <td>14:10</td>
                  <td>Corte</td>
                  <td>Concluído</td>
                </tr>

                <tr>
                  <td>008.085.732-55</td>
                  <td>Jeremias</td>
                  <td>29/08/2021</td>
                  <td>15:15</td>
                  <td>Barba</td>
                  <td>Cancelado</td>
                </tr>

                <tr>
                  <td>654.160.327-53</td>
                  <td>Marcos Rodrigues</td>
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
