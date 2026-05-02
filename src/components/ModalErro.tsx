interface ModalErroProps {
  mensagem: string;
  onClose: () => void;
}

export default function ModalErro({ mensagem, onClose }: ModalErroProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl p-8 w-[300px] text-center shadow-lg">
        <h2 className="text-2xl text-blue-600 mb-2">Erro!</h2>
        <p className="text-gray-700 mb-6">{mensagem}</p>

        <button
          onClick={onClose}
          className="bg-[#567DB7] text-white px-6 py-2 rounded-xl cursor-pointer hover:opacity-80 transition"
        >
          Ok
        </button>
      </div>
    </div>
  );
}