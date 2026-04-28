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

	return (
		<div className="flex-col content-center justify-center w-full h-full ">
			<header className="flex justify-center items-center text-center bg-[#567DB7] text-white w-full h-102.25 rounded-b-[60px]">
				<div>
					<h1 className="text-[96px]">Saldo Atual:</h1>
					<h2 className="text-[55px]">R$ {saldo}</h2>
				</div>
			</header>
			<div className="flex justify-center gap-27.25">
				{rotas.map((rota) => (
					<BotaoNavegacao
						key={rota.nome}
						className="bg-[#567DB7] text-[55px] text-white w-85.5 h-79.25 rounded-[60px] mt-25.75 mb-48.75"
						nome={rota.nome}
						rota={rota.rota}
					/>
				))}
			</div>
		</div>
	);
}

export default TelaConta;
