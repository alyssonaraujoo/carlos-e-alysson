import { useState } from 'react'
import AdicionarGastos from './components/AdicionarGastos'
import Footer from './components/Footer'
import Gastos from './components/Gastos'
import Grafico from './components/Grafico'
import Login from './components/Login'
import Nav from './components/Nav'
import './Rotas.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Rotas() {

  const [gastos, setGastos] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/AdicionarGastos" element={<AdicionarGastos setGastos={setGastos} gastos={gastos} />} /> 
          <Route path="/Gastos" element={<Gastos gastos={gastos} />} />
          <Route path="/Grafico" element={<Grafico gastos={gastos} />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Rotas
