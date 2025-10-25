import { useState, useEffect } from 'react';
import { getRandomColor } from '../utils/colors';

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  const [timeColor, setTimeColor] = useState('#FFFFFF');
  const [showError, setShowError] = useState(false);
  const [format, setFormat] = useState('totalSeconds');
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({ 
    alignSelf: 'flex-start', 
    marginTop: '20px' 
  });
  const [showReport, setShowReport] = useState(false);
  const [timezoneOffset, setTimezoneOffset] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      setTime(now);
      setSecond(now.getSeconds());
      setTimeColor(getRandomColor());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleAlarmSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(true);
    
    setButtonStyle({
      position: 'absolute',
      bottom: `${Math.random() * 50 + 20}%`,
      left: `${Math.random() * 60 + 10}%`,
    });
  };

  const handleChangeFormat = () => {
    setFormat(current => {
      if (current === 'totalSeconds') return 'hex';
      if (current === 'hex') return 'binary';
      if (current === 'binary') return 'analog';
      return 'totalSeconds';
    });
  };

  return {
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
    setFormat,
    setButtonStyle,
    setShowReport,
    setTimezoneOffset,
    setShowHelp,
    setSecond,
    handleAlarmSubmit,
    handleChangeFormat
  };
};
