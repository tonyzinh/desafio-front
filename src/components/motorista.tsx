import React, { useState } from 'react';

interface MotoristaProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Motorista({ isOpen, onClose }: MotoristaProps) {
  const [formData, setFormData] = useState({ name: '', cpf: '', cnh: '' });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    await fetch('http://localhost:3000/drivers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-4 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Cadastrar Motorista</h2>
        <input 
          type="text" 
          name="name" 
          placeholder="Nome"
          className="border p-2 w-full mb-2"
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="cpf" 
          placeholder="CPF"
          className="border p-2 w-full mb-2"
          value={formData.cpf}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="cnh" 
          placeholder="CNH"
          className="border p-2 w-full mb-2"
          value={formData.cnh}
          onChange={handleChange}
        />
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
          <button onClick={handleSubmit} className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Salvar</button>
        </div>
      </div>
    </div>
  );
}
