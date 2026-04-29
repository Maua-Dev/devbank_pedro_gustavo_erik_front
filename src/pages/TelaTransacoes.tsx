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
		<div className="min-h-screen bg-[#CBD8DD] flex flex-col">


			<header className="bg-[#567DB7] rounded-b-[30px] px-6 py-6">
				<h1 className="text-white text-2xl md:text-4xl font-light">
					Histórico de Transações
				</h1>
{/* usando key para verificar o tipo da transação */}
			</header>
			<div className="flex flex-col gap-4 px-4 mt-6">
				{transacoes.map((transacao, index) => (
					<CardTransacoes
						key={index}
						tipo={transacao.tipo}
						valor={transacao.valor}
					/>
				))}
			</div>

{/* div dos botões, espaçamento e animação on click */}
			<div className="flex flex-col md:flex-row justify-center items-center md:gap-12 mt-120 mb-6 px-4">
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