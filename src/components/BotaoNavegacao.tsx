import { useNavigate } from "react-router-dom";

interface BotaoNavegacao {
	nome: string;
	rota: string;
	className?: string;
}

export default function BotaoNavegacao({
	nome,
	rota,
	className,
}: BotaoNavegacao) {
	const navigate = useNavigate();
	return (
		<div className="">
			<button className={className + " cursor-pointer"} onClick={() => navigate("/" + rota)}>
				{nome}
			</button>
		</div>
	);
}
