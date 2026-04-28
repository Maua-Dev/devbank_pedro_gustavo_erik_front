import CardNotas from "../components/CardNotas";
import CardQtde from "../components/CardQtde";
import BotaoNavegacao from "../components/BotaoNavegacao";
import { useState } from "react";
const notas = [
	{ valorNota: 2 },
	{ valorNota: 5 },
	{ valorNota: 10 },
	{ valorNota: 20 },
	{ valorNota: 50 },
	{ valorNota: 100 },
	{ valorNota: 200 },
];

function TelaSaque() {
	const saldo = 1000;
	const [notasSelecionadas, setNotasSelecionadas] = useState<{
		[chave: number]: number;
	}>({});

	function atualizarNotas(valor: number, qntde: number) {
		setNotasSelecionadas((prev) => {
			const novo = { ...prev };

			if (qntde === 0) {
				delete novo[valor];
			} else {
				novo[valor] = qntde;
			}
			return novo;
		});
	}

	const totalSaque = Object.entries(notasSelecionadas).reduce(
		(totalSaque, [valor, qnde]) =>
			totalSaque + Number.parseInt(valor) * qnde,
		0,
	);
	return (
		<div>
      <CardQtde total={totalSaque} titulo="Quantidade Saque"/>
      <CardQtde total={saldo - totalSaque} titulo="Quantidade Saque"/>
			<p>Selecione as Celulas que Você deseja</p>
			<div style={{ display: "flex", gap: "10px" }}>
				{notas.map((nota) => (
					<CardNotas
						key={nota.valorNota}
						valorNota={nota.valorNota}
						onchange={atualizarNotas}
					/>
				))}
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<BotaoNavegacao nome="Voltar" rota="conta" />
				<button className="cursor-pointer">Retirar</button>
			</div>
		</div>
	);
}

export default TelaSaque;
