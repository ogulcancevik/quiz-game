import { useEffect, useState } from 'preact/hooks';

function useTimer(countdown: number) {
  const [time, setTime] = useState(countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return {
    time,
    resetTimer: () => setTime(countdown),
  }
}

export default useTimer;
