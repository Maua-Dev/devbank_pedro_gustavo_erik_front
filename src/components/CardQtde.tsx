interface CardQtde {
    total: number;
    titulo: string;
}

export default function CardQtde({ total, titulo }: CardQtde) {
  return (
    <div className="flex items-center justify-between bg-[#99B3D9] rounded-[30px] px-3 py-2 md:p-4 w-[48%] md:w-full max-w-[600px]">
      
      <p className="text-black text-lg md:text-2xl whitespace-nowrap">
        {titulo}
      </p>

      <p className="flex items-center justify-center bg-white rounded-[30px] text-lg md:text-xl px-4 py-2 whitespace-nowrap">
        R$ {total}
      </p>

    </div>
  );
}
// Deixa os cards simétricos mesmo que um tenha mais texto que o outro