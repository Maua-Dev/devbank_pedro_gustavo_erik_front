import { useEffect, useState } from "react";
import BotaoNavegacao from "../components/BotaoNavegacao";

function TelaConta() {
	const [saldo, setSaldo] = useState(0);

	useEffect(() => {
		const apiUrl = localStorage.getItem("api_url");

		fetch(apiUrl + "/")
			.then((res) => res.json())
			.then((data) => setSaldo(data.balance));
	}, []);

	const rotas = [
		{
			nome: "Sacar",
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
			<header className="bg-[#567DB7] text-white w-full rounded-b-[40px] flex flex-col items-center justify-center py-10">
				<h1 className="text-3xl md:text-5xl font-light">
					Saldo Atual:
				</h1>
				<h2 className="text-2xl md:text-4xl mt-5">
					R$ {saldo}
				</h2>
			</header>
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
			hover:brightness-110
			hover:shadow-2xl"
		/>
				))	}
</div>

		</div>
	);

}

export default TelaConta;
