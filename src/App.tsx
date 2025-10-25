import React from 'react';
import ConfusingAnalogClock from './components/ConfusingAnalogClock';
import AlarmForm from './components/AlarmForm';
import ChaoticSettings from './components/ChaoticSettings';
import Report from './components/Report';
import { useClock } from './hooks/useClock';
import { formatTime } from './utils/time';
import './App.css';

export default function App() {
  const {
    time,
    timeColor,
    showError,
    format,
    buttonStyle,
    showReport,
    timezoneOffset,
    showHelp,
    second,
    setShowError,
    handleAlarmSubmit,
    handleChangeFormat,
    setTimezoneOffset,
    setShowHelp,
    setShowReport
  } = useClock();

  const { time: formattedTime, label: formatLabel } = formatTime(time, format, timezoneOffset);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 py-12
                    bg-gradient-to-br from-purple-800 via-pink-700 to-red-600
                    animate-gradient-xy text-white font-['Comic_Sans_MS',_cursive']">
      
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-2xl backdrop-blur-sm
                    border border-gray-400 max-w-4xl w-full relative overflow-hidden">
        
        <h1 className="text-3xl font-bold text-center text-yellow-300 mb-4
                       [text-shadow:_2px_2px_4px_rgba(0,0,0,0.9)]">
          O Relógio Inconveniente
        </h1>

        {format === 'analog' ? (
          <ConfusingAnalogClock time={time} timeColor={timeColor} />
        ) : (
          <div 
            className="text-6xl font-bold text-center transition-colors duration-500"
            style={{ color: timeColor, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
          >
            {formattedTime}
          </div>
        )}
        <div className="text-center text-gray-300 mb-6">{formatLabel}</div>

        <AlarmForm 
          onSubmit={handleAlarmSubmit} 
          showError={showError} 
          onCancel={() => setShowError(false)} 
          buttonStyle={buttonStyle} 
        />

        <ChaoticSettings 
          timezoneOffset={timezoneOffset} 
          onTimezoneChange={setTimezoneOffset} 
          second={second} 
          showHelp={showHelp} 
          onToggleHelp={() => setShowHelp(!showHelp)} 
        />

        <p className="text-xs text-gray-400 mt-4 text-center">
          Este é um app de demonstração. 
          <span 
            className="text-cyan-400 underline hover:text-cyan-200 cursor-help"
            onClick={handleChangeFormat}
          >
            Mudar o formato da hora
          </span>
          . Sim, é aqui.
        </p>

        <Report showReport={showReport} onToggleReport={() => setShowReport(!showReport)} />

      </div>
    </div>
  );
}
