import React from 'react';

interface ClockControlsProps {
  hour: number;
  minute: number;
  second: number;
  setHour: (hour: number) => void;
  setMinute: (minute: number) => void;
  setSecond: (second: number) => void;
}

const ClockControls: React.FC<ClockControlsProps> = ({
  hour,
  minute,
  second,
  setHour,
  setMinute,
  setSecond,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      {/* Minute Slider (Left Vertical) */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 h-64">
        <input
          type="range"
          min="0"
          max="59"
          value={minute}
          onChange={(e) => setMinute(parseInt(e.target.value, 10))}
          className="w-64 h-2 -rotate-90 appearance-none bg-gray-700 rounded-lg"
          style={{ transformOrigin: 'top left', marginLeft: '10rem', marginTop: '15rem' }}
        />
      </div>

      {/* Hour Slider (Right Vertical) */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 h-64">
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(parseInt(e.target.value, 10))}
          className="w-64 h-2 rotate-90 appearance-none bg-gray-700 rounded-lg"
          style={{ transformOrigin: 'top right', marginRight: '10rem', marginTop: '15rem'  }}
        />
      </div>

      {/* Second Slider (Bottom Horizontal) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64">
        <input
          type="range"
          min="0"
          max="59"
          value={second}
          onChange={(e) => setSecond(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none"
          style={{ marginBottom: '6.5rem' }}
        />
      </div>
    </div>
  );
};

export default ClockControls;
