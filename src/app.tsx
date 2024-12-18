import logo from './assets/logo.png';
import { Modal } from './components/Cadastro';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="bg-zinc-950 h-screen flex flex-col items-center justify-center gap-8">
      <div>
        <img className="fixed w-[55px] h-[55px] top-8 left-14 object-cover" src={logo} alt="Motora.ai"/>
      </div>
      <div className='fixed top-10 left-18 flex items-center gap-8 object-cover'>
      <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
        <button className="relative w-fit mt-[-1.00px] font-normal text-zinc-300 text-sm tracking-[0] leading-[normal]">
          Veículos
        </button>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
        <button className="relative w-fit mt-[-1.00px] font-normal text-zinc-300 text-sm tracking-[0] leading-[normal]">
          Motoristas
        </button>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-2 relative bg-zinc-550 rounded-[58px] overflow-hidden border border-dashed border-zinc-800 hover:bg-zinc-900">
        <button className="relative w-fit mt-[-1.00px] font-normal text-zinc-300 text-sm tracking-[0] leading-[normal]">
          Viagens
        </button>
      </div>
      <div className='fixed top-10 right-20 flex items-center gap-8 object-cover'>
      <button type="button" onClick={() => setOpen(!open)} className='px-4 py-2.5 rounded-lg bg-cyan-500 text-cyan-50 flex items-center font-medium gap-2 hover:bg-cyan-600'>Cadastrar</button>
      </div>
      </div>
      <Modal isOpen={open} />
    </div>
  );
}