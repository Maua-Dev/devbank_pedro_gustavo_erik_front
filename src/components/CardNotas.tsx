import { useState } from "react";
import { Notas } from "../services/transferencias_service";

interface CardNotas {
	valorNota: keyof Notas;
	onchange: (valor: keyof Notas, qntde: number) => void;
}

export default function CardNotas({ valorNota, onchange }: CardNotas) {
	const [qntdNotas, setQntdNotas] = useState(0);

	function alterarQntde(novaQnd: number) {
		setQntdNotas(novaQnd);
		onchange(valorNota, novaQnd);
	}

	return (
		<div className="flex flex-col gap-[13.5px] items-center">
			
			<p className="flex justify-center items-center text-4xl bg-[#567DB7] w-52 h-24 text-center rounded-[30px] text-white">
				{valorNota}R$
			</p>

			<div className="flex flex-row justify-around w-full">
				
				<button
					className="w-[3.7475rem] h-10 bg-[#567DB7] text-white rounded-[30px] cursor-pointer"
					onClick={() => {
						qntdNotas > 0
							? alterarQntde(qntdNotas - 1)
							: alert("Não à notas neste valor selecionadas");
					}}
				>
					-
				</button>

				<p className="flex justify-center items-center w-[4.936rem] h-10 bg-[#99B3D9] text-black rounded-[30px]">
					{qntdNotas}
				</p>

				<button
					className="w-[3.7475rem] h-10 bg-[#567DB7] text-white rounded-[30px] cursor-pointer"
					onClick={() => alterarQntde(qntdNotas + 1)}
				>
					+
				</button>

			</div>
		</div>
	);
}