import React from 'react';

interface ConfusingAnalogClockProps {
  time: Date;
  timeColor: string;
}

const ConfusingAnalogClock: React.FC<ConfusingAnalogClockProps> = ({ time, timeColor }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // VIOLAÇÃO 12: Mapeamento - Ponteiros invertidos e comportamento estranho
  // O ponteiro da hora é o mais longo, o minuto é o mais curto, segundo é grosso.
  const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondDegrees = (seconds / 60) * 360; // Gira normalmente, mas o ponteiro é estranho

  return (
    <div 
      className="relative w-64 h-64 rounded-full border-4 border-white mx-auto my-6 shadow-xl"
      style={{ backgroundColor: timeColor, transition: 'background-color 0.5s ease' }}
    >
      {/* Marcações de hora - VIOLAÇÃO 12: Números invertidos ou desalinhados */}
      {[...Array(12)].map((_, i) => {
        const num = (12 - i); // Ordem invertida (12, 11, ..., 1)
        const angle = (i / 12) * 360;
        const x = 50 + 40 * Math.sin(angle * Math.PI / 180);
        const y = 50 - 40 * Math.cos(angle * Math.PI / 180);
        return (
          <div 
            key={i} 
            className="absolute text-white font-bold text-lg" 
            style={{ 
              top: `${y}%`, 
              left: `${x}%`, 
              transform: 'translate(-50%, -50%)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}
          >
            {num}
          </div>
        );
      })}

      {/* Ponteiro da HORA (o mais LONGO, viola expectativa) */}
      <div 
        className="absolute bg-red-600 rounded-full origin-bottom"
        style={{
          width: '4px',
          height: '40%', // LONG
          top: '10%',
          left: 'calc(50% - 2px)',
          transform: `rotate(${hourDegrees}deg)`,
          transformOrigin: 'bottom center',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 3
        }}
      />
      {/* Ponteiro do MINUTO (o mais CURTO, viola expectativa) */}
      <div 
        className="absolute bg-blue-600 rounded-full origin-bottom"
        style={{
          width: '6px', // Mais largo que o da hora
          height: '25%', // CURTO
          top: '25%',
          left: 'calc(50% - 3px)',
          transform: `rotate(${minuteDegrees}deg)`,
          transformOrigin: 'bottom center',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 2
        }}
      />
      {/* Ponteiro do SEGUNDO (GROSSO e com cor estranha, viola expectativa) */}
      <div 
        className="absolute bg-green-300 rounded-full origin-bottom"
        style={{
          width: '10px', // GROSSO
          height: '35%',
          top: '15%',
          left: 'calc(50% - 5px)',
          transform: `rotate(${secondDegrees}deg)`,
          transformOrigin: 'bottom center',
          transition: 'transform 0.5s linear', // Linear para manter a sensação de segundos
          zIndex: 1
        }}
      />
      {/* Ponto central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-4 h-4 rounded-full bg-gray-900 z-40" />
    </div>
  );
}

export default ConfusingAnalogClock;
