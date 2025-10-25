import React from 'react';

interface AlarmFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  showError: boolean;
  onCancel: () => void;
  buttonStyle: React.CSSProperties;
}

const AlarmForm: React.FC<AlarmFormProps> = ({ onSubmit, showError, onCancel, buttonStyle }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <label htmlFor="alarmInput" className="text-sm">
        Definir Alarme (Formato: HH:mm:ss:ms):
      </label>
      <input 
        id="alarmInput"
        type="text"
        className="p-2 rounded bg-gray-800 text-white border border-gray-600
                   focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Tente a sorte..."
      />
      <button 
        type="submit" 
        className="bg-green-600 hover:bg-green-700 p-2 rounded self-end"
      >
        Definir
      </button>

      {showError && (
        <div className="mt-4 p-3 bg-red-800 border-2 border-dashed border-yellow-300
                      text-yellow-300 font-mono text-sm rounded">
          <p className="font-bold">Falha na Operação</p>
          <p>Erro 0x80070057: Parâmetro inválido.</p>
        </div>
      )}
      
      {showError && (
        <button 
          onClick={onCancel}
          className="p-2 bg-blue-700 hover:bg-blue-800 rounded transition-all"
          style={buttonStyle} 
        >
          Cancelar Alarme
        </button>
      )}
    </form>
  );
};

export default AlarmForm;
