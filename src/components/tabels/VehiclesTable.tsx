import React from 'react';

interface VehiclesTableProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

export function VehiclesTable({ data, onEdit, onDelete }: VehiclesTableProps) {
  return (
    <table className="w-full text-center">
      <thead>
        <tr>
          <th className="border-b border-b-zinc-700 p-2 text-white">ID</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Type</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Plate</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Lat</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Lng</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Speed</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Status</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <tr key={v.id}>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.id}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.type}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.plate}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.lat}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.lng}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.speed}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{v.status}</td>
            <td className="border-b border-b-zinc-700 p-2 flex justify-center gap-5 left-12">
              <button onClick={() => onEdit(v)} className="px-2 py-1 bg-blue-500 text-white rounded">Editar</button>
              <button onClick={() => onDelete(v.id)} className="px-2 py-1 bg-red-500 text-white rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
