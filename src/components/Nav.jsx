import './Nav.css';
import logo from '../assets/imgs/logo.png';


function Nav() {
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
            <a href='Login' >Login</a>
        </li>        
        <li>
            <a href='AdicionarGastos' >Adicionar Gastos</a>
        </li>        
        <li>
            <a href='Gastos' >Gastos</a>
        </li>        
        <li>
            <a href='Grafico' >Gráfico</a>
        </li>        

      </ul>
    </nav>
  )
}

export default Nav