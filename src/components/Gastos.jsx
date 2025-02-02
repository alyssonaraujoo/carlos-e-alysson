import './Gastos.css';
import AdicionarGastos from './AdicionarGastos';


function Gastos() {
  return (
    <div className="Gastos">
      <h1>Lista de Gastos</h1>
      <ul>
      {/* Intera dentro do array de gastos e exibe os dados de cada gasto; O erro esta aqui e talvez em AdicionarGastos, ainda pensando em como resolver*/}
      {AdicionarGastos.props.map((gasto, index) => {
        return (
          <li key={index}>
            {gasto.descricao} - {gasto.categoria} - {gasto.valor} - {gasto.data}
          </li>
        );
      })}
      </ul>
    </div>
  )
}

export default Gastos