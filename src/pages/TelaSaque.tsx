import CardNotas from "../components/CardNotas";
import CardQtde from "../components/CardQtde";
import BotaoNavegacao from "../components/BotaoNavegacao";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import getUser from "../services/user";
import { withdrawPost, Notas } from "../services/transferencias_service";

function TelaSaque() {
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

	const enviarSaque = () => {
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
		<div className="bg-[#CBD8DD] w-full min-h-screen flex flex-col">
			<NavBar tipo="saque" />
			<div className="flex flex-row">
				<div className="pt-24.75">
					<div className="flex flex-col gap-20.5 ml-21.5 ">
						<CardQtde
							titulo="Quantidade Saque"
							total={-totalSaque}
						/>
						<CardQtde
							titulo="Quantidade Final"
							total={saldo - totalSaque}
						/>
					</div>
					
				</div>
				<div className="mt-6.5 ml-64">
					<div className="grid grid-cols-2 gap-9 just">
						{Object.entries(notasSelecionadas).map(([valor]) => (
							<CardNotas
								key={valor}
								valorNota={valor as keyof Notas}
								onchange={atualizarNotas}
							/>
						))}
					</div>
				</div>
			</div>

			{/*Posicionamento dos botões fora da div principal*/}
			<div className="flex justify-center  mb-6">
			<div className="flex gap-4">
				<div className="w-[140px]">
				<BotaoNavegacao
					className="w-full bg-[#567DB7] text-white py-3 rounded-xl text-lg"
					nome="Voltar"
					rota="conta"
				/>
				</div>

				<button
				onClick={enviarSaque}
				className="w-[140px] bg-[#567DB7] text-white py-3 rounded-xl text-lg"
				>
				Retirar
				</button>

		</div>
		</div>
		</div>
	);
}

export default TelaSaque;
