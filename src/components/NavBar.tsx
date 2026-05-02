import { useEffect, useState } from "react";
import getUser from "../services/user";

interface NavBar {
	saldo?: number,
	tipo: string,
}

export default function NavBar({ tipo, saldo }: NavBar) {
	const [user, setUser] = useState<any>();

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

	const name = user?.name;
	const agency = user?.agency;
	const account = user?.account;
	const current_balance = Number.isNaN(user?.current_balance) ? 0 : user?.current_balance;
	
	if (tipo === "deposito" || tipo === "saque") {
		return (
			<header className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#567DB7] rounded-b-[40px] w-full px-4 py-4">
				<div className="bg-[#99B3D9] text-white rounded-[20px] p-3 w-full md:w-auto text-sm md:text-base">
					<p>Nome: {name}</p>
					<p>Conta: {agency}</p>
					<p>Agência: {account}</p>
				</div>
				<p className="bg-[#99B3D9] text-white rounded-[20px] px-4 py-3 text-center text-lg md:text-2xl w-full md:w-auto">
					Saldo atual: R$ {saldo}
				</p>
				<p className="bg-[#99B3D9] text-black rounded-[20px] px-4 py-3 text-center text-sm md:text-base w-full md:w-auto max-w-100">
					Selecione as cédulas e a quantidade que você deseja
				</p>
			</header>
		);
	} else if (tipo === "historico") {
		return (
			<header className="flex justify-between items-center bg-[#567DB7] rounded-b-[30px] px-6 py-6 text-white font-light">
				<h1 className="md:text-4xl">Histórico de Transações</h1>
				<div className="flex flex-col md:gap-1.25 text-1x2 bg-[#99B3D9] md:pt-6.5 md:pl-4 md:pr-4.5 md:pb-6.5  rounded-[15px]">
					<p>Nome: {name}</p>
					<p>Conta: {account}</p>
					<p>Agência: {agency}</p>
				</div>
			</header>
		);
	} else if (tipo === "conta") {
		return (
			<header className="flex justify-between items-center bg-[#567DB7] text-white w-full rounded-b-[40px] py-10">
				<h1 className="text-3xl md:text-5xl md:ml-3 font-light">
					Saldo Atual: R$ {current_balance}
				</h1>
				<div className="flex flex-col md:gap-1.25 text-1x2 bg-[#99B3D9] md:mr-3 md:pt-6.5 md:pl-4 md:pr-4.5 md:pb-6.5  rounded-[15px]">
					<p>Nome: {name}</p>
					<p>Conta: {account}</p>
					<p>Agência: {agency}</p>
				</div>
			</header>
		);
	}
}
