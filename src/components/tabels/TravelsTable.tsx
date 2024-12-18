import React from 'react';

interface TravelsTableProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

export function TravelsTable({ data, onEdit, onDelete }: TravelsTableProps) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">ID</th>
          <th className="border-b p-2">DriverId</th>
          <th className="border-b p-2">VehicleId</th>
          <th className="border-b p-2">Status</th>
          <th className="border-b p-2">Start</th>
          <th className="border-b p-2">End</th>
          <th className="border-b p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((t) => (
          <tr key={t.id}>
            <td className="border-b p-2">{t.id}</td>
            <td className="border-b p-2">{t.driverId}</td>
            <td className="border-b p-2">{t.vehicleId}</td>
            <td className="border-b p-2">{t.status}</td>
            <td className="border-b p-2">{t.start}</td>
            <td className="border-b p-2">{t.end}</td>
            <td className="border-b p-2 flex gap-2">
              <button onClick={() => onEdit(t)} className="px-2 py-1 bg-blue-500 text-white rounded">Editar</button>
              <button onClick={() => onDelete(t.id)} className="px-2 py-1 bg-red-500 text-white rounded">Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
