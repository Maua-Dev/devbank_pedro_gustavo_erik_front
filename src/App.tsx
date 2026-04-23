import { BrowserRouter, Routes, Route } from "react-router-dom"

import TelaInicial from "./pages/TelaInicial"
import TelaConta from "./pages/TelaConta"
import TelaDeposito from "./pages/TelaDeposito"
import TelaSaque from "./pages/TelaSaque"
import TelaTransacoes from "./pages/TelaTransacoes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/conta" element={<TelaConta />} />
        <Route path="/deposito" element={<TelaDeposito />} />
        <Route path="/saque" element={<TelaSaque />} />
        <Route path="/transacoes" element={<TelaTransacoes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App