export function Viagem({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Cadastrar Viagem</h2>
        <form>
          <label className="block mb-2">
            Destino:
            <input type="text" className="w-full border rounded p-2 mt-1" />
          </label>
          <label className="block mb-2">
            Data:
            <input type="date" className="w-full border rounded p-2 mt-1" />
          </label>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Salvar
          </button>
          <button type="button" onClick={onClose} className="ml-2 bg-red-500 text-white px-4 py-2 rounded">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}