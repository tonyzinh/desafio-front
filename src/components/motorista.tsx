import React from 'react';

// Tipos das props
interface MotoristaProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Motorista({ isOpen, onClose }: MotoristaProps) {
  if (!isOpen) return null; // Retorna null se isOpen for false

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-semibold mb-4 flex justify-center ali">Cadastrar Motorista</h2>
        <form>
          <label className="block mb-2">
            Nome:
            <input type="text" className="w-full border border-gray-700 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600" />
          </label>
          <label className="block mb-2">
            CPF:
            <input type="text" className="w-full border border-gray-700 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600" />
          </label>
          <label className="block mb-2">
            CNH:
            <input type="text" className="w-full border border-gray-700 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600" />
          </label>
          <div className='flex justify-center items-center'>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Salvar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Cancelar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
