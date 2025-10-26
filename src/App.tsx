import React from 'react';
import ConfusingAnalogClock from './components/ConfusingAnalogClock';
import Report from './components/Report';
import ClockControls from './components/ClockControls';
import { useClock } from './hooks/useClock';
import './App.css';

export default function App() {
  const {
    time,
    timeColor,
    showReport,
    setShowReport,
    setHour,
    setMinute,
    setSecond,
  } = useClock();

  // um horário que seja 3 horas a frente do relógio
  const timeDif1 = new Date(time.getTime());
  timeDif1.setHours(timeDif1.getHours() + 3);

  // um horário que seja 3 horas atrás do relógio
  const timeDif2 = new Date(time.getTime());
  timeDif2.setHours(timeDif2.getHours() - 3);

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

        <ConfusingAnalogClock time={timeDif1} timeColor={timeColor} />
        <ConfusingAnalogClock time={time} timeColor={timeColor} />
        <ConfusingAnalogClock time={timeDif2} timeColor={timeColor} />
        
        <ClockControls
          hour={time.getHours()}
          minute={time.getMinutes()}
          second={time.getSeconds()}
          setHour={setHour}
          setMinute={setMinute}
          setSecond={setSecond}
        />


        <Report showReport={showReport} onToggleReport={() => setShowReport(!showReport)} />

      </div>
    </div>
  );
}
