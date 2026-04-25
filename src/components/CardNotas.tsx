import { useState } from "react";

interface CardNotas{
    valorNota: number;
}

export default function CardNotas({valorNota}: CardNotas){
    const [qntdNotas, setQntdNotas] = useState(0)
    return(
        <div className="">
            <p>{valorNota}R$</p>
            <div style={{display: "flex", gap: "5px"}}>
                <button onClick={() => {qntdNotas > 0 ? setQntdNotas(qntdNotas - 1) : alert("Não à notas neste valor depositadas")}}>-</button>
                <p>{qntdNotas}</p>
                <button onClick={() => {setQntdNotas(qntdNotas + 1)}}>+</button>
            </div>
        </div>
    )
}