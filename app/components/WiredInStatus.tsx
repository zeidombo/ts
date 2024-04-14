"use client";
// WiredInStatus.tsx (new file)
import React, { useEffect, useState } from 'react';


// Your WiredInStatus component code goes here
interface WiredInStatusProps {
  status: string;
  startTime: Date;
}


export const WiredInStatus: React.FC<WiredInStatusProps> = ({ status, startTime }) => {
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  useEffect(() => {
    if (status === 'ONLINE') {
      const interval = setInterval(() => {
        setTimeElapsed(new Date().getTime() - startTime.getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status, startTime]);

  const formatTimeElapsed = (milliseconds: number) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="absolute top-0 right-0 m-4">
      <div className="text-sm font-bold text-green-500 bg-black rounded px-2 py-1 inline-flex items-center">
        <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        {status === 'ONLINE' ? 'WIRED IN' : 'OFFLINE'}
      </div>
      {status === 'ONLINE' && (
        <div className="text-xs text-white mt-1">
        </div>
      )}
    </div>
  );
}
