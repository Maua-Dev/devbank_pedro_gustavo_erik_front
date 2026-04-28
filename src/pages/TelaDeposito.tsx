  import CardNotas from "../components/CardNotas"
  import BotaoNavegacao from "../components/BotaoNavegacao"
  import { useState } from "react";

  const notas = [
    {valorNota: 2},
    {valorNota: 5},
    {valorNota: 10},
    {valorNota: 20},
    {valorNota: 50},
    {valorNota: 100},
    {valorNota: 200},
  ];

  export default function TelaDeposito() {
    const saldo = 1000
    const [notasSelecionadas, setNotasSelecionadas] = useState<{[chave: number]: number}>({});

    function atualizarNotas(valor: number, qntde: number){
      setNotasSelecionadas((prev) => {
        const novo = {...prev};
        
        if (qntde === 0){
          delete novo[valor];
        } else {
          novo[valor] = qntde;
        }

        return novo;
        
      });
    }

    const totalDepositado = Object.entries(notasSelecionadas).reduce((totalDepositado, [valor, qnde]) => totalDepositado + Number.parseInt(valor) * qnde, 0)
    return <div>
      <header className="flex ">
        <h1>Saldo atual: {0.00}</h1>
        <h2>Selecione as cédulas e a quantidade que você deseja</h2>
      </header>
      <div>
        <p>Quantidade Depositada R$ {totalDepositado}</p>
        <p>Quantidade Total R$ {saldo + totalDepositado}</p>
      </div>
      <div className="flex gap-2">
        <BotaoNavegacao className="bg-[#567DB7] w-57.5 h-27.25 rounded-[30px]" nome="Voltar" rota="conta" />
        <button className="bg-[#567DB7] w-57.5 h-27.25 rounded-[30px]" >Depositar</button>
      </div>
      <p>Selecione as Celulas que Você deseja</p>
      <div className="grid grid-cols-2 gap-9">
        {notas.map((nota) => (<CardNotas key={nota.valorNota} valorNota={nota.valorNota} onchange={atualizarNotas}/>))}
      </div>
    </div>
  } 