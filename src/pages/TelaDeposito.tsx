import CardNotas from "../components/CardNotas"

const notas = [
  {valorNota: 2},
  {valorNota: 5},
  {valorNota: 10},
  {valorNota: 20},
  {valorNota: 50},
  {valorNota: 100},
  {valorNota: 200},
]
function TelaDeposito() {
  return <div>
    <h1>Tela Depósito</h1>
    <p>Selecione as Celulas que Você deseja</p>
    <div style={{display: "flex", gap: "10px"}}>
      {notas.map((nota) => (<CardNotas valorNota={nota.valorNota} />))}
    </div>
    <br />
    <div style={{display: "flex", gap:"10px"}}>
    <button>Voltar</button>
    <button>Depositar</button>
    </div>
  </div>
}

export default TelaDeposito