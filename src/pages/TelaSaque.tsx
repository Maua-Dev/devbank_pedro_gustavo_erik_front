import CardNotas from "../components/CardNotas";
import CardQtde from "../components/CardQtde";
import BotaoNavegacao from "../components/BotaoNavegacao";
import { useState } from "react";
const notas = [
	{ valorNota: 2 },
	{ valorNota: 5 },
	{ valorNota: 10 },
	{ valorNota: 20 },
	{ valorNota: 50 },
	{ valorNota: 100 },
	{ valorNota: 200 },
];

function TelaSaque() {
	const saldo = 1000;
	const [notasSelecionadas, setNotasSelecionadas] = useState<{
		[chave: number]: number;
	}>({});

	function atualizarNotas(valor: number, qntde: number) {
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
        <div className="bg-[#CBD8DD] w-full h-full">
          <header className="flex bg-[#567DB7] rounded-b-[60px] w-full h-44.5">
            <h1 className="flex items-center bg-[#99B3D9] text-white w-120.75 h-30.5 mt-4.75 ml-16 mr-19.25 pl-5.5 pt-2.75 rounded-[30px] text-[48px]">
              Saldo atual: {0.0}
            </h1>
            <h2 className="flex items-center justify-center text-[32px] text-black bg-[#99B3D9] w-200.25 h-30.5 mt-4.75 rounded-[30px]">
              Selecione as cédulas e a quantidade que você deseja
            </h2>
          </header>
          <div className="flex flex-row">
            <div className="pt-24.75">
              <div className="flex flex-col gap-20.5 ml-21.5 ">
              <CardQtde titulo="Quantidade Saque" total={totalSaque}/>
              <CardQtde titulo="Quantidade Final" total={saldo - totalSaque}/>
              </div>
              <div className="flex gap-16.75 mt-22.75 ml-9.5 mb-7.25">
                <BotaoNavegacao
                  className="bg-[#567DB7] text-white text-[48px] w-57.5 h-27.25 rounded-[30px]"
                  nome="Voltar"
                  rota="conta"
                />
                <button className="bg-[#567DB7] text-white text-[48px] w-57.5 h-27.25 rounded-[30px] cursor-pointer">
                  Retirar
                </button>
              </div>
            </div>
            <div className="mt-6.5 ml-64">
              <div className="grid grid-cols-2 gap-9 just">
                {notas.map((nota) => (
                  <CardNotas
                    key={nota.valorNota}
                    valorNota={nota.valorNota}
                    onchange={atualizarNotas}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default TelaSaque;