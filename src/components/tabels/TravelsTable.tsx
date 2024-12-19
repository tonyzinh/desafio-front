import React from 'react';

interface TravelsTableProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

export function TravelsTable({ data, onEdit, onDelete }: TravelsTableProps) {
  return (
    <table className="w-full text-center">
      <thead>
        <tr>
          <th className="border-b border-b-zinc-700 p-2 text-white">ID</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">DriverId</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">VehicleId</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Status</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Start</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">End</th>
          <th className="border-b border-b-zinc-700 p-2 text-white">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((t) => (
          <tr key={t.id}>
            <td className="border-b border-b-zinc-700 p-2 text-white">{t.id}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{t.driverId}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{t.vehicleId}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{t.status}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{t.start}</td>
            <td className="border-b border-b-zinc-700 p-2 text-white">{t.end}</td>
            <td className="border-b border-b-zinc-700 p-2 flex justify-center gap-5 left-12">
              <button onClick={() => onEdit(t)} className="px-2 py-1 bg-blue-500 text-white rounded">Editar</button>
              <button onClick={() => onDelete(t.id)} className="px-2 py-1 bg-red-500 text-white rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
