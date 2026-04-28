import { useState } from "react";

interface CardQtde {
    total: number;
    titulo: string;
}

export default function CardQtde({total, titulo} : CardQtde) {
    return (
    <div className="bg-[#99B3D9] rounded-[30px] p-4 w-64">
      <p className="text-black mb-2">{titulo}</p>
      <div className="bg-white rounded-xl px-4 py-3 text-lg">
        R$ {total}
      </div>
    </div>
  );
}