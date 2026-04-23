import { useEffect, useState } from "react"
import BotaoNavegacao from "../components/BotaoNavegacao"

function TelaConta() {
  const [saldo, setSaldo] = useState(0)


  useEffect(() => {
    const apiUrl = localStorage.getItem("api_url")

    fetch(apiUrl + "/")
      .then((res) => res.json())
      .then((data) => setSaldo(data.balance))
  }, [])

  const rotas = [
    {
      nome: "Sacar",
      rota: "saque"
    },
    {
      nome: "Deposito",
      rota: "deposito"
    },
    {
      nome: "Transacao",
      rota: "transacoes"
    }
  ]

  return (
    <div>
      <h1>Conta</h1>
      <p>Saldo: R$ {saldo}</p>
      <div style={{display: "flex"}}>
      {rotas.map((rota) => <BotaoNavegacao nome={rota.nome} rota={rota.rota} />)}
      </div>
    </div>
  )
}

export default TelaConta