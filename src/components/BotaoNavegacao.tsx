import { useNavigate } from "react-router-dom"

interface BotaoNavegacao{
    nome: string;
    rota: string;
}

export default function BotaoNavegacao({nome, rota}: BotaoNavegacao){
    const navigate = useNavigate()
    return <div>
        <button onClick={() => navigate("/" + rota)}>{nome}</button>
    </div>
}