import React from 'react';

// Definição das props do modal
interface Vmodal {
  isOpen: boolean; // Controla se o modal está aberto
  onClose: () => void; // Função para fechar o modal
}

export function Veiculos({ isOpen, onClose }: Vmodal) {
  // Se isOpen for falso, não renderiza o modal
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Cadastrar Veículo</h2>
        <form>
          <label className="block mb-2">
            Modelo:
            <input
              type="text"
              className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-2">
            Placa:
            <input
              type="text"
              className="w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={onClose} // Fecha o modal
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
