import AdicionarGastos from './components/AdicionarGastos'
import Footer from './components/Footer'
import Gastos from './components/Gastos'
import Grafico from './components/Grafico'
import Login from './components/Login'
import Nav from './components/Nav'
import './Rotas.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Rotas() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/AdicionarGastos" element={<AdicionarGastos />} /> 
          <Route path="/Gastos" element={<Gastos />} />
          <Route path="/Grafico" element={<Grafico />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Rotas
