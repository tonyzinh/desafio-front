import React from 'react';

interface DriversTableProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

export function DriversTable({ data, onEdit, onDelete }: DriversTableProps) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">ID</th>
          <th className="border-b p-2">Name</th>
          <th className="border-b p-2">CPF</th>
          <th className="border-b p-2">CNH</th>
          <th className="border-b p-2">Status</th>
          <th className="border-b p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td className="border-b p-2">{d.id}</td>
            <td className="border-b p-2">{d.name}</td>
            <td className="border-b p-2">{d.cpf}</td>
            <td className="border-b p-2">{d.cnh}</td>
            <td className="border-b p-2">{d.status}</td>
            <td className="border-b p-2 flex gap-2">
              <button onClick={() => onEdit(d)} className="px-2 py-1 bg-blue-500 text-white rounded">Editar</button>
              <button onClick={() => onDelete(d.id)} className="px-2 py-1 bg-red-500 text-white rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
