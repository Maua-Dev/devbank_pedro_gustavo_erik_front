import CardQtde from "../components/CardQtde";
import CardNotas from "../components/CardNotas";
import BotaoNavegacao from "../components/BotaoNavegacao";
import NavBar from "../components/NavBar";
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

export default function TelaDeposito() {
	
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

	const totalDepositado = Object.entries(notasSelecionadas).reduce(
		(totalDepositado, [valor, qnde]) =>
			totalDepositado + Number.parseInt(valor) * qnde,
		0,
	);

	return (
		<div className="bg-[#CBD8DD] w-full h-full">
			<NavBar tipo="deposito"/>
			<div className="flex flex-row">
				<div className="pt-24.75">
					<div className="flex flex-col gap-20.5 ml-21.5 ">
					<CardQtde titulo="Quantidade Saque" total={totalDepositado}/>
					<CardQtde titulo="Quantidade Final" total={saldo - totalDepositado}/>
					</div> 
					<div className="flex gap-16.75 mt-22.75 ml-9.5 mb-7.25">
						<BotaoNavegacao
							className="bg-[#567DB7] text-white text-[48px] w-57.5 h-27.25 rounded-[30px]"
							nome="Voltar"
							rota="conta"
						/>
						<button className="bg-[#567DB7] text-white text-[48px] w-57.5 h-27.25 rounded-[30px] cursor-pointer">
							Depositar
						</button>
					</div>
				</div>
				<div className="mt-6.5 ml-64">
					<div className="grid grid-cols-2 gap-9 just">
						{notas.map((nota) => (
							<CardNotas
								key={nota.valorNota}
								valorNota={nota.valorNota}
								onchange={atualizarNotas}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
