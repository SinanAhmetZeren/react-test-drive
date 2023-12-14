import React, { useState, useEffect } from "react";

function Timer({ handleResetAll }) {
  const [remaining, setRemaining] = useState(10);
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((s) => s - 1);
      if (remaining === 0) {
        setRemaining(duration);
        handleResetAll(duration);
      }
      console.log(remaining);
    }, duration * 50);

    return () => {
      clearInterval(interval);
    };
  }, [remaining, duration, handleResetAll, setRemaining]);

  return (
    <div>
      <input
        className="w-full h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
        type="range"
        min="0"
        max="20"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <span>{duration}</span>
      <p>Time remaining: {remaining} seconds</p>
    </div>
  );
}

export default Timer;
