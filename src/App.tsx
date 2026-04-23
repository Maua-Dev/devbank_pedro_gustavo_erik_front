import { useState, useEffect } from "react"

// função principal do app, gerenciar telas e conexção com API
function App() {
  const [tela, setTela] = useState("home")
  const [url, setUrl] = useState("")
  const [erro, setErro] = useState("")
  const [saldo, setSaldo] = useState(0)

   useEffect(() => {
    if (tela === "conta") {
      const apiUrl = localStorage.getItem("api_url")

      fetch(apiUrl + "/")
        .then((res) => res.json())
        .then((data) => setSaldo(data.balance))
    }
  }, [tela])

  // conectar a API
  const conectar = () => {
    if (!url) return

    localStorage.setItem("api_url", url)
    setTela("conta")
  }
  // tela 1 - inserir API e conectar
  if (tela === "home") {
    return (
      <div>
        <h1>DevBank</h1>
        <input
          type="text"
          placeholder="Digite a URL da API"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />Teste<br />
        <button onClick={conectar}>Conectar</button>
        {erro && <p>{erro}</p>}
      </div>
    )
  }
//tela 2 - saldo, depositar, sacar e transação.
  if (tela === "conta") {
    return (
      <div>
        <h1>Conta</h1>
        <p>Saldo: em R$ {saldo}</p>

        <button>Depositar</button>
        <button>Sacar</button>
        <button>Transações</button>
      </div>
    )
  }
}

export default App 