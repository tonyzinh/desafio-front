import React, { useEffect, useState } from 'react';

import logo from './assets/logo.png';
import { Veiculos } from './components/veiculos';
import { Motorista } from './components/motorista';
import { Viagem } from './components/viagem';
import { EditModal } from './components/editModal';
import { VehiclesTable } from './components/tabelas/veiculosTabela';
import { DriversTable } from './components/tabelas/motoristaTabela';
import { TravelsTable } from './components/tabelas/viagemTabela';

export function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const [showVehicles, setShowVehicles] = useState(true);
  const [showDrivers, setShowDrivers] = useState(false);
  const [showTravels, setShowTravels] = useState(false);

  const [vehiclesData, setVehiclesData] = useState([]);
  const [driversData, setDriversData] = useState([]);
  const [travelsData, setTravelsData] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [entityType, setEntityType] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openSpecificModal = (modal: string) => {
    setOpenModal(modal);
    setDropdownOpen(false);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const handleFetchVehicles = async () => {
    const response = await fetch('http://localhost:3000/vehicles');
    const data = await response.json();
    setVehiclesData(data);
  };

  const handleFetchDrivers = async () => {
    const response = await fetch('http://localhost:3000/drivers');
    const data = await response.json();
    setDriversData(data);
  };

  const handleFetchTravels = async () => {
    const response = await fetch('http://localhost:3000/travels');
    const data = await response.json();
    setTravelsData(data);
  };

  const showVehiclesTable = async () => {
    await handleFetchVehicles();
    setShowVehicles(true);
    setShowDrivers(false);
    setShowTravels(false);
  };

  const showDriversTable = async () => {
    await handleFetchDrivers();
    setShowVehicles(false);
    setShowDrivers(true);
    setShowTravels(false);
  };

  const showTravelsTable = async () => {
    await handleFetchTravels();
    setShowVehicles(false);
    setShowDrivers(false);
    setShowTravels(true);
  };

  const handleDelete = async (id: number, type: string) => {
    let url = '';
    if (type === 'vehicles') {
      url = `http://localhost:3000/vehicles/${id}`;
    } else if (type === 'drivers') {
      url = `http://localhost:3000/drivers/${id}`;
    } else if (type === 'travels') {
      url = `http://localhost:3000/travels/${id}`;
    }

    await fetch(url, {
      method: 'DELETE'
    });

    if (type === 'vehicles') {
      handleFetchVehicles();
    } else if (type === 'drivers') {
      handleFetchDrivers();
    } else if (type === 'travels') {
      handleFetchTravels();
    }
  };

  const handleEdit = (item: any, type: string) => {
    setSelectedItem(item);
    setEntityType(type);
    setEditModalOpen(true);
  };

  const handleUpdate = () => {
    if (entityType === 'vehicles') {
      handleFetchVehicles();
    } else if (entityType === 'drivers') {
      handleFetchDrivers();
    } else if (entityType === 'travels') {
      handleFetchTravels();
    }
  };

  useEffect(() => {
    handleFetchVehicles();
  }, []);

  return (
    <div className="bg-zinc-950 h-screen flex flex-col items-center justify-center gap-8">
      <div>
        <img className="fixed w-[55px] h-[55px] top-8 left-14 object-cover" src={logo} alt="Motora.ai" />
      </div>
      <div className="fixed top-10 left-18 flex flex-col gap-4 text-center justify-center items-center">
      <p className="text-zinc-400 text-sm">
        Selecione uma das opções abaixo para visualizar os dados correspondentes
        <br />(O banco de dados deve está ativo para visualizar os dados):
      </p>

        <div className="flex items-center gap-8 object-cover">
          <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
            <button onClick={showVehiclesTable} className="relative w-fit font-normal text-zinc-300 text-sm">
              Veículos
            </button>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
            <button onClick={showDriversTable} className="relative w-fit font-normal text-zinc-300 text-sm">
              Motoristas
            </button>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
            <button onClick={showTravelsTable} className="relative w-fit font-normal text-zinc-300 text-sm">
              Viagens
            </button>
          </div>
      </div>
    </div>

      <div className="fixed top-10 right-20 flex items-center gap-8 object-cover">
        <div className="relative">
          <button
            className="px-4 py-2 bg-cyan-500 text-cyan-50 rounded hover:bg-cyan-600"
            onClick={toggleDropdown}
          >
            Cadastrar +
          </button>
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-1 text-sm text-gray-700">
                <li
                  onClick={() => openSpecificModal('veiculos')}
                  className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                >
                  Cadastrar Veículo
                </li>
                <li
                  onClick={() => openSpecificModal('motorista')}
                  className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                >
                  Cadastrar Motorista
                </li>
                <li
                  onClick={() => openSpecificModal('viagem')}
                  className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                >
                  Cadastrar Viagem
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-3/4 border-solid border-2 border-zinc-800 p-4 rounded-md overflow-auto max-h-[60%]">
        {showVehicles && (
          <VehiclesTable
            data={vehiclesData}
            onEdit={(item) => handleEdit(item, 'vehicles')}
            onDelete={(id) => handleDelete(id, 'vehicles')}
          />
        )}

        {showDrivers && (
          <DriversTable
            data={driversData}
            onEdit={(item) => handleEdit(item, 'drivers')}
            onDelete={(id) => handleDelete(id, 'drivers')}
          />
        )}

        {showTravels && (
          <TravelsTable
            data={travelsData}
            onEdit={(item) => handleEdit(item, 'travels')}
            onDelete={(id) => handleDelete(id, 'travels')}
          />
        )}
      </div>

      <Veiculos isOpen={openModal === 'veiculos'} onClose={closeModal} />
      <Motorista isOpen={openModal === 'motorista'} onClose={closeModal} />
      <Viagem isOpen={openModal === 'viagem'} onClose={closeModal} />

      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        entityType={entityType}
        selectedItem={selectedItem}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
