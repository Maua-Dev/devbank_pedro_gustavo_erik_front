import { useState } from "react";
interface CardNotas {
	valorNota: number;
	onchange: (valor: number, qntde: number) => void;
}

export default function CardNotas({ valorNota, onchange }: CardNotas) {
	const [qntdNotas, setQntdNotas] = useState(0);

	function alterarQntde(novaQnd: number) {
		setQntdNotas(novaQnd);
		onchange(valorNota, novaQnd);
	}

	return (
		<div>
			<div className="flex flex-col gap-[13.5px] items-center">
				<p className="flex justify-center items-center text-[48px] bg-[#567DB7] w-73.75 h-[115.5px] text-center rounded-[30px] text-white">
					{valorNota}R$
				</p>
				<div className="flex flex-row justify-around">
					<button
						className="w-16.75 h-10 bg-[#567DB7] text-white rounded-[30px]"
						onClick={() => {
							qntdNotas > 0
								? alterarQntde(qntdNotas - 1)
								: alert("Não à notas neste valor selecionadas");
						}}
					>
						-
					</button>
					<p className=" flex justify-center items-center w-16.75 h-10 ml-10.75 mr-10.75 bg-[#99B3D9] text-black rounded-[30px]">
						{qntdNotas}
					</p>
					<button
						className="w-16.75 h-10 rounded-[30px] bg-[#567DB7] text-white"
						onClick={() => {
							alterarQntde(qntdNotas + 1);
						}}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
