
import React, { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      onClose();
      setSent(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="glass w-full max-w-md p-8 rounded-3xl relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white"
        >
          ✕
        </button>

        {sent ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-6">✅</div>
            <h3 className="text-2xl font-bold mb-2">Solicitud Enviada</h3>
            <p className="text-slate-400">Un consultor especializado se contactará en las próximas 24hs.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-6">Solicitar Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nombre y Apellido</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-colors" placeholder="Ej. Dr. Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nombre de la Clínica</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-colors" placeholder="Ej. Sanatorio Central" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email Corporativo</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-colors" placeholder="j.perez@clinica.com" />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-lg mt-4 shadow-lg glow-blue"
              >
                Enviar Solicitud
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
