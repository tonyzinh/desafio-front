import React, { useState } from 'react';
import { Veiculos } from './components/veiculos';
import { Motorista } from './components/motorista';
import { Viagem } from './components/viagem';
import logo from './assets/logo.png';

export function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

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

  return (
    <div className="bg-zinc-950 h-screen flex flex-col items-center justify-center gap-8">
      {/* Logo */}
      <div>
        <img className="fixed w-[55px] h-[55px] top-8 left-14 object-cover" src={logo} alt="Motora.ai" />
      </div>

      {/* Botões principais */}
      <div className="fixed top-10 left-18 flex items-center gap-8 object-cover">
        <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
          <button className="relative w-fit font-normal text-zinc-300 text-sm">Veículos</button>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
          <button className="relative w-fit font-normal text-zinc-300 text-sm">Motoristas</button>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
          <button className="relative w-fit font-normal text-zinc-300 text-sm">Viagens</button>
        </div>
      </div>

      {/* Dropdown Button */}
      <div className="fixed top-10 right-20 flex items-center gap-8 object-cover">
        <div className="relative"> {/* Envolve o botão e dropdown em um container relative */}
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

      {/* Modals */}
      <Veiculos isOpen={openModal === 'veiculos'} onClose={closeModal} />
      <Motorista isOpen={openModal === 'motorista'} onClose={closeModal} />
      <Viagem isOpen={openModal === 'viagem'} onClose={closeModal} />
    </div>
  );
}
