interface CardTransacoes{
	tipo: string;
	valor: number;
}

export default function CardTransacoes({tipo, valor}: CardTransacoes){
	return(
		<div className="flex gap-10.25">
			<div className="flex items-center text-[48px] bg-[#99B3D9] w-212.25 h-31.5 pl-7.75 rounded-[30px]">
				<p className="mr-55">R$</p>
				<p>{valor.toFixed(2)}</p>
			</div>
			<div className="flex justify-center items-center bg-[#B3C3DB] w-87.25 h-31.5 rounded-[30px]">
				<p className="text-[48px]">{tipo === "deposit" ? "Depósito" : "Saque"}</p>
			</div>
		</div>
	)
}