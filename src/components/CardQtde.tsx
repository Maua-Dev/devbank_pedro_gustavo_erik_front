interface CardQtde {
    total: number;
    titulo: string;
}

export default function CardQtde({total, titulo} : CardQtde) {
    return (
    <div className="bg-[#99B3D9] rounded-[30px] p-4 w-102 h-54.75">
      <p className="text-black text-[32px] mb-2">{titulo}</p>
      <div className="bg-white text-[48px] rounded-xl px-4 py-3 text-lg">
        R$ {total}
      </div>
    </div>
  );
}