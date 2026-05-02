import CardNotas from "../components/CardNotas";
import CardQtde from "../components/CardQtde";
import BotaoNavegacao from "../components/BotaoNavegacao";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ModalErro from "../components/ModalErro";
import getUser from "../services/user";
import { withdrawPost, Notas } from "../services/transferencias_service";


export default function TelaSaque() {
	const [user, setUser] = useState<any>();
	const saldo = user?.current_balance;

	useEffect(() => {
		const carregaUser = async () => {
			try {
				const data = await getUser();
				setUser(data);
			} catch (error) {
				console.error(error);
			}
		};
		carregaUser();
	}, []);

	const [notasSelecionadas, setNotasSelecionadas] = useState<Notas>({
		"2": 0,
		"5": 0,
		"10": 0,
		"20": 0,
		"50": 0,
		"100": 0,
		"200": 0,
	});

	const [erro, setErro] = useState("");

	const enviarSaque = () => {
	if (totalSaque > saldo) {
		setErro("Saldo insuficiente para transação");
		return;
	}

	const resposta = withdrawPost(notasSelecionadas);
	console.log(resposta);
};
	function atualizarNotas(valor: keyof Notas, qntde: number) {
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
	<div className="bg-[#CBD8DD] w-screen min-h-screen overflow-x-hidden">
		<NavBar tipo="saque" />

		{/* cards */}
		<div className="flex flex-row justify-center gap-3 mt-4 px-2">
			<CardQtde
				titulo="Quantidade a Sacar:"
				total={totalSaque}
			/>
			<CardQtde
				titulo="Quantidade Final:"
				total={
					Number.isNaN(saldo + totalSaque)
						? 0
						: saldo + totalSaque
				}
			/>
		</div>

		{/* notas */}
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 justify-items-center">
			{Object.entries(notasSelecionadas).map(([valor]) => (
				<CardNotas
					key={valor}
					valorNota={valor as keyof Notas}
					onchange={atualizarNotas}
				/>
			))}
		</div>

		{/* botões */}
		<footer className="flex justify-center gap-4 mt-21 pb-6">
			<div className="w-[140px]">
				<BotaoNavegacao
					className="w-full bg-[#567DB7] text-white py-3 rounded-xl text-lg"
					nome="Voltar"
					rota="conta"
				/>
			</div>

			<button
				onClick={enviarSaque}
				className="w-[140px] bg-[#567DB7] text-white py-3 rounded-xl text-lg cursor-pointer"
			>
				Retirar
			</button>
		</footer>

		{erro && (
			<ModalErro
				mensagem={erro}
				onClose={() => setErro("")}
	/>
		)}
	</div>
	
);
}