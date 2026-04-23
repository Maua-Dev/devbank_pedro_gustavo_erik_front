import CardNotas from "../components/CardNotas"
import BotaoNavegacao from "../components/BotaoNavegacao"

const notas = [
  {valorNota: 2},
  {valorNota: 5},
  {valorNota: 10},
  {valorNota: 20},
  {valorNota: 50},
  {valorNota: 100},
  {valorNota: 200},
]

function TelaSaque() {
    return <div>
      <h1>Tela Saque</h1>
      <p>Selecione as Celulas que Você deseja</p>
      <div style={{display: "flex", gap: "10px"}}>
        {notas.map((nota) => (<CardNotas valorNota={nota.valorNota} />))}
      </div>
      <div style={{display: "flex", gap:"10px"}}>
      <BotaoNavegacao nome="Voltar" rota="conta" />
      <button>Retirar</button>
      </div>
    </div>
  }

export default TelaSaque