import { useState } from "react"
import { useNavigate } from "react-router-dom" 

function TelaInicial() {
  const [url, setUrl] = useState("")
  const navigate = useNavigate()

  const conectar = () => {
    if (!url) {
      alert("Digite a URL da API")
      return
    }

    localStorage.setItem("api_url", url)
    navigate("/conta")
  }

  return (
    <div>
      <h1>DevBank</h1>

      <input
        type="text"
        placeholder="Digite a URL da API"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br /><br />

      <button onClick={conectar}>Conectar</button>
    </div>
  )
}

export default TelaInicial