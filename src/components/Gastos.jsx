import './Gastos.css';

function Gastos({ gastos }) {
  return (
    <div className="Gastos">
      <h1>Lista de Gastos</h1>
      {gastos.length === 0 ? (
        <p>Nenhum gasto cadastrado ainda.</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id}>
              {gasto.descricao} - {gasto.categoria} - R$ {gasto.valor.toFixed(2)} - {gasto.data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Gastos;

