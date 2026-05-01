interface CardQtde {
    total: number;
    titulo: string;
}

export default function CardQtde({total, titulo} : CardQtde) {
    return (
    <div className="flex items-center bg-[#99B3D9] rounded-[30px] p-4 md:w-167.75 md:h-27 gap-4">
      <p className="text-black text-[32px]">{titulo}</p>
      <p className="flex items-center bg-white rounded-[30px] text-2xl md:w-72 md:h-12 md:pl-2">R$ {total}</p>
    </div>
  );
}