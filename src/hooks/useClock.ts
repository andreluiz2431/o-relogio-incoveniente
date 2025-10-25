import { useState, useEffect, useRef } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (!isPaused) {
        setTime(prevTime => new Date(prevTime.getTime() + 1000));
        setTimeColor(getRandomColor());
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [isPaused]);

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

  const resumeClock = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  const setHour = (hour: number) => {
    setIsPaused(true);
    const newTime = new Date(time);
    newTime.setHours(hour);
    setTime(newTime);
    resumeClock();
  };

  const setMinute = (minute: number) => {
    setIsPaused(true);
    const newTime = new Date(time);
    newTime.setMinutes(minute);
    setTime(newTime);
    resumeClock();
  };

  const setSecond = (second: number) => {
    setIsPaused(true);
    const newTime = new Date(time);
    newTime.setSeconds(second);
    setTime(newTime);
    resumeClock();
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
    isPaused,
    setShowError,
    setFormat,
    setButtonStyle,
    setShowReport,
    setTimezoneOffset,
    setShowHelp,
    setIsPaused,
    setHour,
    setMinute,
    setSecond,
    handleAlarmSubmit,
    handleChangeFormat
  };
};
