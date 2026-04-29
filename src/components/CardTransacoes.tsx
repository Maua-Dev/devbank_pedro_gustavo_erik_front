interface CardTransacoes{
	tipo: string;
	valor: number;
}
export default function CardTransacoes({ tipo, valor }: CardTransacoes) {
	return (
		<div className="flex items-center gap-4">
{/* bloco: valores das transações */}
			<div className="flex items-center gap-10 flex-1 bg-[#99B3D9] px-4 py-3 rounded-xl">
				<p className="text-sm md:text-base font-medium">R$</p>
				<p className="text-sm md:text-base font-medium">
					{valor.toFixed(2)}
				</p>
			</div>
{/*bloco: tipo das transações */}
			<div className="flex items-center justify-center bg-[#B3C3DB] px-4 py-3 rounded-xl min-w-[100px]">
				<p className="text-sm md:text-base font-medium">
					{tipo === "deposit" ? "Depósito" : "Saque"}
				</p>
			</div>

		</div>
	);
}