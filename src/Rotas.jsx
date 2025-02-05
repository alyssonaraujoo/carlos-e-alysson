import { useState } from 'react'
import Home from './components/Home'
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

  const adicionarGasto = (novoGasto) => {
    setGastos([...gastos, { ...novoGasto, id: Date.now() }]);
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/aplicativo" element={
            <>
              <AdicionarGastos adicionarGasto={adicionarGasto} />
              <Gastos gastos={gastos} />
              <Grafico gastos={gastos} />
            </>
          }
          />
          <Route path="/Gastos" element={<Gastos gastos={gastos} />} />
          <Route path="/Grafico" element={<Grafico gastos={gastos} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Rotas
