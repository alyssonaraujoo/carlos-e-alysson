import './Home.css'
import Dinheiro from '../assets/imgs/dinheiro-domado.png';

function Home() {
  return (
    <div className='centralizado'>
      <h1>Dinheiro Domado</h1>
      <p>Seu Dinheiro Domado em Poucos Cliques</p>
      <img className="dinheiro-domado" src={Dinheiro} alt="Carteira com moedas e cartões" />
    </div>
  );
}

export default Home;