import { useState } from "react";

interface CardNotas{
    valorNota: number;
    className?: string;
}

export default function CardNotas({valorNota, className}: CardNotas){
    const [qntdNotas, setQntdNotas] = useState(0)
    return(
        <div className="">
            <p>{valorNota}R$</p>
            <div style={{display: "flex", gap: "5px"}}>
                <button className={className} onClick={() => {qntdNotas > 0 ? setQntdNotas(qntdNotas - 1) : alert("Não à notas neste valor depositadas")}}>-</button>
                <p>{qntdNotas}</p>
                <button className={className} onClick={() => {setQntdNotas(qntdNotas + 1)}}>+</button>
            </div>
        </div>
    )
}