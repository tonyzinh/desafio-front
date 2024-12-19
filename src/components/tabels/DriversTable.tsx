import React from 'react';

interface DriversTableProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

export function DriversTable({ data, onEdit, onDelete }: DriversTableProps) {
  return (
    <table className="w-full text-center">
      <thead>
        <tr>
          <th className="border-b border-b-zinc-700 p-2 text-white">ID</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Nome</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">CPF</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">CNH</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Status</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr key={d.id}>
            <td className="border-b border-b-zinc-700 p-2 text-white">{d.id}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{d.name}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{d.cpf}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{d.cnh}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{d.status}</td>
            <td className="border-b border-b-zinc-700 p-2 flex justify-center gap-5 left-12">
              <button onClick={() => onEdit(d)} className="px-2 py-1 bg-blue-500 text-white rounded">Editar</button>
              <button onClick={() => onDelete(d.id)} className="px-2 py-1 bg-red-500 text-white rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
