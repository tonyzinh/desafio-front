import React, { useEffect, useState } from 'react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  entityType: string;
  selectedItem: any;
  onUpdate: () => void;
}

export function EditModal({ isOpen, onClose, entityType, selectedItem, onUpdate }: EditModalProps) {
  const [formData, setFormData] = useState({} as any);

  useEffect(() => {
    if (selectedItem) {
      setFormData(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    let url = '';
    if (entityType === 'vehicles') {
      url = `http://localhost:3000/vehicles/${selectedItem.id}`;
    } else if (entityType === 'drivers') {
      url = `http://localhost:3000/drivers/${selectedItem.id}`;
    } else if (entityType === 'travels') {
      url = `http://localhost:3000/travels/${selectedItem.id}`;
    }

    await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    onUpdate();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-4 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Editar {entityType}</h2>
        {selectedItem && Object.keys(selectedItem).map((key) => (
          key !== 'id' && (
            <div className="mb-2" key={key}>
              <label className="block text-gray-700 font-bold mb-2" htmlFor={key}>
                {key}:
              </label>
              <input
                className="border w-full p-2"
                id={key}
                name={key}
                value={formData[key] || ''}
                onChange={handleChange}
              />
            </div>
          )
        ))}
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
          <button onClick={handleSave} className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Salvar</button>
        </div>
      </div>
    </div>
  );
}