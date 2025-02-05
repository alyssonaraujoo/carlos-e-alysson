import './Grafico.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


function Grafico() {

  const data = [
    { name: 'Energia', valor: 525, pv: 2400, amt: 2400 },
    { name: 'Aluguel', valor: 1500, pv: 2400, amt: 2400 },
    { name: 'Internet', valor: 99, pv: 2400, amt: 2400 },
    { name: 'Plano de saúde', valor: 200, pv: 2400, amt: 2400 }
  ];

  const renderBarChart = (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="valor" fill="#8884d8" barSize={30} />
    </BarChart>
  );
  return (
    <>
      <div>{renderBarChart}</div>
    </>





  )
}

export default Grafico