import CardQtde from "../components/CardQtde";
import CardNotas from "../components/CardNotas";
import BotaoNavegacao from "../components/BotaoNavegacao";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import getUser, { User } from "../services/user";
import { depositPost, Notas } from "../services/transferencias_service";

export default function TelaDeposito() {
	const [user, setUser] = useState<User | null>(null);
	const [saldo, setSaldo] = useState(user?.current_balance ?? 0);

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

	async function enviarDeposito() {
		const resposta = await depositPost(notasSelecionadas);

		if ("error" in resposta) {
			console.log(resposta.error);
		} else {
			setSaldo(resposta.current_balance);
			console.log(resposta);
		}
	}

	function atualizarNotas(valor: keyof Notas, qntde: number) {
		setNotasSelecionadas((prev) => {
			const novo = { ...prev };
			novo[valor] = qntde;
			return novo;
		});
	}

	const totalDepositado = Object.entries(notasSelecionadas).reduce(
		(totalDepositado, [valor, qnde]) =>
			totalDepositado + Number.parseInt(valor) * qnde,
		0,
	);

	return (
		<div className="bg-[#CBD8DD] min-w-screen min-h-screen overflow-x-hidden">
			<NavBar tipo="deposito" />
			<div className="flex flex-row flex-wrap justify-center items-center gap-20.5 md:mt-5 ">
				<CardQtde
					titulo="Quantidade Deposito:"
					total={totalDepositado}
				/>
				<CardQtde
					titulo="Quantidade Final:"
					total={
						Number.isNaN(saldo + totalDepositado)
							? saldo
							: saldo + totalDepositado
					}
				/>
			</div>
			<div className="flex flex-wrap flex-row gap-15.75 pl-5 pt-7">
				{Object.entries(notasSelecionadas).map(([valor]) => (
					<CardNotas
						key={valor as keyof Notas}
						valorNota={valor as keyof Notas}
						onchange={atualizarNotas}
					/>
				))}
			</div>
			<footer className="flex justify-center gap-4 items-end md:pt-16 w-full">
				<div className="w-35">
					<BotaoNavegacao
						className="w-full bg-[#567DB7] text-white py-3 rounded-xl text-lg"
						nome="Voltar"
						rota="conta"
					/>
				</div>

				<button
					onClick={enviarDeposito}
					className="w-35 bg-[#567DB7] text-white py-3 rounded-xl text-lg cursor-pointer"
				>
					Retirar
				</button>
			</footer>
		</div>
	);
}
