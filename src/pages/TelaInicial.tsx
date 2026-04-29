import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TelaInicial() {
	const [url, setUrl] = useState("");
	const navigate = useNavigate();

	const conectar = () => {
		if (!url) {
			alert("Digite a URL da API");
			return;
		}

		localStorage.setItem("api_url", url);
		navigate("/conta");
	};
// letreiro, input para URL, input para o botão de entrada. Fonte para o fundo:: #567DB7

	return (
		<div className="h-screen w-full flex items-center justify-center bg-[#567DB7]">
			<div className="flex flex-col items-center gap-6">

				<h1 className="text-white text-5xl font-light devbank-title">
					Dev<span className="font-bold">Bank</span>
				</h1>
				<input
					type="text"
					placeholder="Insira aqui a URL da sua API"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					className="w-100 p-3 rounded-xl bg-gray-200 text-black text-center outline-none input-custom"
				/>

				<button
					onClick={conectar}
					className="px-10 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition btn-custom"
				>
					Entrar
				</button>

			</div>
		</div>
	);
}

export default TelaInicial;