import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function TelaConta() {
  const [saldo, setSaldo] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const apiUrl = localStorage.getItem("api_url")

    fetch(apiUrl + "/")
      .then((res) => res.json())
      .then((data) => setSaldo(data.balance))
  }, [])

  return (
    <div>
      <h1>Conta</h1>

      <p>Saldo: R$ {saldo}</p>
      <button onClick={() => navigate("/deposito")}>Depositar</button>

      <button onClick={() => navigate("/saque")}>
        Sacar
      </button>

      <button onClick={() => navigate("/transacoes")}>
        Transações
      </button>
    </div>
  )
}

export default TelaConta