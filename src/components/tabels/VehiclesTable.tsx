import React from 'react';

interface VehiclesTableProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

export function VehiclesTable({ data, onEdit, onDelete }: VehiclesTableProps) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">ID</th>
          <th className="border-b p-2">Type</th>
          <th className="border-b p-2">Plate</th>
          <th className="border-b p-2">Lat</th>
          <th className="border-b p-2">Lng</th>
          <th className="border-b p-2">Speed</th>
          <th className="border-b p-2">Status</th>
          <th className="border-b p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <tr key={v.id}>
            <td className="border-b p-2">{v.id}</td>
            <td className="border-b p-2">{v.type}</td>
            <td className="border-b p-2">{v.plate}</td>
            <td className="border-b p-2">{v.lat}</td>
            <td className="border-b p-2">{v.lng}</td>
            <td className="border-b p-2">{v.speed}</td>
            <td className="border-b p-2">{v.status}</td>
            <td className="border-b p-2 flex gap-2">
              <button onClick={() => onEdit(v)} className="px-2 py-1 bg-blue-500 text-white rounded">Editar</button>
              <button onClick={() => onDelete(v.id)} className="px-2 py-1 bg-red-500 text-white rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
