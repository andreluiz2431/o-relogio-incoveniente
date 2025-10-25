export const formatTime = (date: Date, format: string, timezoneOffset: number) => {
  const adjustedDate = new Date(date.getTime() + timezoneOffset * 3600 * 1000);

  const h = adjustedDate.getHours();
  const m = adjustedDate.getMinutes();
  const s = adjustedDate.getSeconds();
  
  switch (format) {
    case 'totalSeconds':
      return { 
        time: (h * 3600 + m * 60 + s).toString(), 
        label: 'segundos desde a meia-noite' 
      };
    case 'hex':
      return { 
        time: `${h.toString(16)}:${m.toString(16)}:${s.toString(16)}`, 
        label: 'tempo hexadecimal' 
      };
    case 'binary':
        return {
        time: `${h.toString(2).padStart(5, '0')}:${m.toString(2).padStart(6, '0')}:${s.toString(2).padStart(6, '0')}`,
        label: 'tempo binário (24h)'
        }
    case 'analog':
        return {
          time: `Formato Analógico (Ver Ponteiros)`,
          label: `GMT ${timezoneOffset > 0 ? '+' : ''}${timezoneOffset}`
        }
    default:
      return { time: 'ERRO', label: 'formato desconhecido' };
  }
};
