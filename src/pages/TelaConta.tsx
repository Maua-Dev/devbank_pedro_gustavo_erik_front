import BotaoNavegacao from "../components/BotaoNavegacao";
import NavBar from "../components/NavBar";

function TelaConta() {
	const rotas = [
		{
			nome: "Saque",
			rota: "saque",
		},
		{
			nome: "Deposito",
			rota: "deposito",
		},
		{
			nome: "Transação",
			rota: "transacoes",
		},
	];
	// Ajuste de responsividade
	return (
		<div className="min-h-screen w-full bg-gray-200 flex flex-col">
			<NavBar tipo="conta" />
			<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-60 md:mt-45 px-4">
				{rotas.map((rota) => (
					<BotaoNavegacao
						key={rota.nome}
						nome={rota.nome}
						rota={rota.rota}
						className="bg-[#567DB7] text-white rounded-2xl w-40 h-32 md:w-48 md:h-40 flex items-center justify-center text-lg md:text-xl
			/* efeito quando passar o mouse sobre o btn */
			transition-all duration-300
			hover:scale-105
			hover:brightness-100
			hover:shadow-2xl"
					/>
				))}
			</div>
		</div>
	);
}

export default TelaConta;
