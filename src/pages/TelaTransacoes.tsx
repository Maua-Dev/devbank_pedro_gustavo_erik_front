import { useEffect, useState } from "react";
import BotaoNavegacao from "../components/BotaoNavegacao";
import CardTransacoes from "../components/CardTransacoes";
import NavBar from "../components/NavBar";
import { getHistory } from "../services/transferencias_service";

export default function TelaTransacoes() {
	const [transacoes, setTransacoes] = useState<any[]>([]);

	useEffect(() => {
		const carregaTransacoes = async () => {
			try {
				const data = await getHistory();
				setTransacoes(data.all_transactions);
			} catch (error) {
				console.error(error);
			}
		};
		carregaTransacoes();
	}, []);

	const botoesNav = [
		{
			nome: "Voltar",
			rota: "conta",
		},
		{
			nome: "Deposito",
			rota: "deposito",
		},
		{
			nome: "Sacar",
			rota: "saque",
		},
	];
	return (
		<div className="min-h-screen bg-[#CBD8DD] flex flex-col">
			<NavBar tipo="historico" />

			{/* usando key para verificar o tipo da transação */}
			<div className="flex flex-col gap-4 px-4 mt-6">
				{transacoes.map((transacao, index) => (
					<CardTransacoes
						key={index}
						tipo={transacao.type}
						valor={transacao.value}
					/>
				))}
			</div>

			{/* div dos botões, espaçamento e animação on click */}
			<div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-4 md:gap-12 z-50">
				{botoesNav.map((botaoNav) => (
					<BotaoNavegacao
						key={botaoNav.nome}
						className="bg-[#567DB7] text-white text-lg md:text-xl w-40 h-14 md:w-48 md:h-16 rounded-xl
						transition-all duration-300 hover:scale-105 hover:brightness-110"
						rota={botaoNav.rota}
						nome={botaoNav.nome}
					/>
				))}
			</div>
		</div>
	);
}
