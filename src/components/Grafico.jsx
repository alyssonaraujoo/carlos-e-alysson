import './Grafico.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function Grafico({ gastos }) {
  
  // Transformar os dados para o formato do gráfico
  const data = gastos.map(gasto => ({
    name: gasto.descricao, // Nome da categoria no eixo X
    valor: parseFloat(gasto.valor), // Valor gasto no eixo Y
  }));

  return (
    <div className="Grafico">
      <h2>Gastos por Categoria</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="valor" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
}

export default Grafico;
