interface NavBar {
	tipo: string;
}

export default function NavBar({ tipo }: NavBar) {
	const nome = "Vitor Soller";
	const conta = "0000";
	const agencia = "0000-0";
	const current_balance = 0
	if (tipo === "deposito" || tipo === "saque") {
		return (
			<header className="flex bg-[#567DB7] rounded-b-[60px] w-full h-44.5">
				<div className="flex flex-col justify-center bg-[#99B3D9] text-white w-58.75 h-30.5 mt-4.75 ml-9 mr-26.25 pl-3.25 rounded-[30px] gap-1.25">
					<p>Nome: {nome}</p>
					<p>Conta: {conta}</p>
					<p>Agência: {agencia}</p>
				</div>
				<h1 className="flex items-center bg-[#99B3D9] text-white w-88.5 h-30.5 mt-4.75 ml-16 mr-9.5 pl-5.5 pt-2.75 rounded-[30px] text-[32px]">
					Saldo atual: {0.0}
				</h1>
				<h2 className="flex items-center justify-center text-[24px] text-black bg-[#99B3D9] w-153 h-30.5 mt-4.75 rounded-[30px]">
					Selecione as cédulas e a quantidade que você deseja
				</h2>
			</header>
		);
	} else if (tipo === "historico") {
		return (
			<header className="flex justify-between bg-[#567DB7] rounded-b-[30px] px-6 py-6 text-white font-light">
				<h1 className="md:text-4xl">
					Histórico de Transações
				</h1>
				<div className="flex flex-col md:gap-1.25 text-1x2 bg-[#99B3D9] md:pt-6.5 md:pl-4 md:pr-4.5 md:pb-6.5  rounded-[15px]">
					<p>Nome: {nome}</p>
					<p>Conta: {conta}</p>
					<p>Agência: {agencia}</p>
				</div>
			</header>
		);
	} else if (tipo === "conta") {
		return (
			<header className="flex items-center justify-between bg-[#567DB7] text-white w-full rounded-b-[40px] py-10">
				<h1 className="text-3xl md:text-5xl md:ml-3 font-light">
					Saldo Atual: R$ {current_balance.toFixed(2)}
				</h1>
				<div className="flex flex-col md:gap-1.25 text-1x2 bg-[#99B3D9] md:mr-3 md:pt-6.5 md:pl-4 md:pr-4.5 md:pb-6.5  rounded-[15px]">
					<p>Nome: {nome}</p>
					<p>Conta: {conta}</p>
					<p>Agência: {agencia}</p>
				</div>
			</header>
		)
	}
}
