import { useState } from "react";
interface CardNotas{
    valorNota: number;
    onchange: (valor: number, qntde: number) => void
}

export default function CardNotas({valorNota, onchange}: CardNotas){

    const [qntdNotas, setQntdNotas] = useState(0)

    function alterarQntde(novaQnd: number){
        setQntdNotas(novaQnd);
        onchange(valorNota, novaQnd);
    }

    return(
        <div className="">
            <div className="flex flex-col gap-[13.5px]">
                <p className="bg-[#567DB7] w-73.75 h-[115.5px] text-center rounded-[30px]">{valorNota}R$</p>
                <div className="flex flex-row justify-around">
                    <button className="w-16.75 h-10 bg-[#567DB7] rounded-[30px]" onClick={() => {qntdNotas > 0 ? alterarQntde(qntdNotas - 1) : alert("Não à notas neste valor selecionadas")}}>-</button>
                    <p>{qntdNotas}</p>
                    <button className="w-16.75 h-10 rounded-[30px] bg-[#567DB7] " onClick={() => {alterarQntde(qntdNotas + 1)}}>+</button>
                </div>
            </div>
        </div>
    )
}