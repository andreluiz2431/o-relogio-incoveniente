import React from 'react';

interface ChaoticSettingsProps {
  timezoneOffset: number;
  onTimezoneChange: (offset: number) => void;
  second: number;
  showHelp: boolean;
  onToggleHelp: () => void;
}

const ChaoticSettings: React.FC<ChaoticSettingsProps> = ({ timezoneOffset, onTimezoneChange, second, showHelp, onToggleHelp }) => {
  return (
    <div className="my-6 border-t-2 border-dashed border-gray-600 pt-4">
      <h2 className="text-lg text-center text-yellow-300 mb-3">Configurações Caóticas</h2>
      
      <div className="mb-4">
        <label className="block text-sm text-center mb-2">
          Ajuste de Fuso Horário (Ineficiente): GMT {timezoneOffset > 0 ? '+' : ''}{timezoneOffset}
        </label>
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => onTimezoneChange(timezoneOffset - 1)}
            className="bg-red-700 hover:bg-red-800 text-white font-bold
                       py-2 px-4 rounded text-xs w-1/2"
          >
            -1 Hora
          </button>
          <button 
            onClick={() => onTimezoneChange(timezoneOffset + 1)}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold
                       py-2 px-4 rounded text-xs w-1/2"
          >
            +1 Hora
          </button>
        </div>
      </div>

      <label className="block text-sm text-center mb-2">Controles Inconsistentes</label>
      <div className={`flex gap-2 ${
        second % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
      }`}>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded w-full transition-all">
          Tema
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded w-full transition-all">
          Som
        </button>
      </div>

      <div className="relative text-center mt-4">
        <button 
          onClick={onToggleHelp}
          className="bg-purple-800 hover:bg-purple-700 text-white rounded-full
                     w-6 h-6 flex items-center justify-center mx-auto text-xs"
          title="Ajuda"
        >
          ?
        </button>
        {showHelp && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                        p-3 bg-white text-black rounded-md shadow-lg w-64
                        font-['Times_New_Roman',_serif] z-10">
            <p className="font-bold text-lg">Ajuda</p>
            <p className="text-sm italic">
              "O tempo é uma ilusão. A hora do almoço, duplamente."
            </p>
            <button 
              onClick={onToggleHelp}
              className="text-xs text-blue-600 underline mt-2"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaoticSettings;
