import './Gastos.css';
// import AdicionarGastos from './AdicionarGastos'

function Gastos() {

  const gastos = [
    { id: 1, descricao: "Supermercado", categoria: "Alimentação", valor: 150.75, data: "2024-04-15" },
    { id: 2, descricao: "Gasolina", categoria: "Transporte", valor: 80.00, data: "2024-04-16" },
  ];

  return (
    <div className="Gastos">
      <h1>Lista de Gastos</h1>
      <ul>
        {gastos.map((gasto) => (
          <li key={gasto.id}>
            {gasto.descricao} - {gasto.categoria} - R$ {gasto.valor} - {gasto.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gastos;
