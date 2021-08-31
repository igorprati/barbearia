import React, { useState } from "react";
import "./admin.scss";

export default function Admin() {

  
  const [info, setInfo] = useState([
    {
      cpf: '163.717.757-05',
      nome: 'Igor Prati',
      data: '30/08/2021',
      hora: '15:40',
      servico: 'Corte e barba',
      status: 'Marcado',
    },
    {
      cpf: '543.452.732-87',
      nome: 'Rodrigo Silva',
      data: '31/08/2021',
      hora: '14:10',
      servico: 'Corte',
      status: 'Concluído',
    },
    {
      cpf: '008.085.732-55',
      nome: 'Jeremias',
      data: '29/08/2021',
      hora: '15:15',
      servico: 'Barba',
      status: 'Cancelado',
    },
    {
      cpf: '654.160.327-53',
      nome: 'Marcos Rodrigues',
      data: '30/08/2021',
      hora: '10:50',
      servico: 'Corte e barba',
      status: 'Concluído',
    },
  ])
  const [busca, setBusca] = useState(info)

  const filterNomes = (e) => {
    const filtered = busca.filter(item => item.nome.toLowerCase().includes(e.target.value.toLowerCase()))
    setInfo(filtered)
  }


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
          <input type="text" id="buscar" placeholder='Pesquisar por nome..' onChange={filterNomes}/>

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
                {info.map(item => (
                  <tr key={item.cpf}>
                    <td>{item.cpf}</td>
                    <td>{item.nome}</td>
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
