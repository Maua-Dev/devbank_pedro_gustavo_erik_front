import BotaoNavegacao from "../components/BotaoNavegacao";
import CardTransacoes from "../components/CardTransacoes";

export default function TelaTransacoes() {
	const transacoes = [
		{
			tipo: "deposit",
			valor: 1000.0,
		},
		{
			tipo: "deposit",
			valor: 500.65,
		},
		{
			tipo: "withdraw",
			valor: 500.5,
		},
	];
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
		<div className="flex flex-col bg-[#CBD8DD] w-full h-full">
			<header className="bg-[#567DB7] rounded-b-[60px]">
				<h1 className="text-[96px] text-white ml-9.25">
					Histórico de Transações
				</h1>
			</header>
			<div className="flex flex-col gap-7.5 ml-10 mr-7.5 mt-11.25">
				{transacoes.map((trasacao) => (
					<CardTransacoes
						tipo={trasacao.tipo}
						valor={trasacao.valor}
					/>
				))}
			</div>
			<div className="flex gap-16.75 ml-10 mt-24.5 mb-7.25">
				{botoesNav.map((botaoNav) => (
					<BotaoNavegacao
						className="bg-[#567DB7] text-white text-[48px] w-57.5 h-27.25 rounded-[30px]"
						rota={botaoNav.rota}
						nome={botaoNav.nome}
					/>
				))}
			</div>
		</div>
	);
}
