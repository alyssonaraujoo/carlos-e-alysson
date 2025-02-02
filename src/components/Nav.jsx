import './Nav.css';


function Nav() {
  return (
    <nav>
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