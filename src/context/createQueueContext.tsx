'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type QueueContextType = {
  queue: number[];
  addToQueue: (id: number) => void;
  removeFromQueue: (id: number) => void;
};

export function CreateQueueContext() {
  const QueueContext = createContext<QueueContextType | undefined>(undefined);

  type QueueProviderProps = {
    children: ReactNode;
  };

  const QueueProvider = ({ children }: QueueProviderProps) => {
    const [queue, setQueue] = useState<number[]>([]);

    const addToQueue = (id: number) => {
      if (!queue.includes(id)) {
        setQueue((prevQueue) => [...prevQueue, id]);
      }
    };

    const removeFromQueue = (id: number) => {
      if (queue.includes(id)) {
        setQueue((prevQueue) => prevQueue.filter((item) => item !== id));
      }
    };

    return (
      <QueueContext.Provider value={{ queue, addToQueue, removeFromQueue }}>
        {children}
      </QueueContext.Provider>
    );
  };

  const useQueue = () => {
    const context = useContext(QueueContext);
    if (!context) {
      throw new Error('useQueue must be used within a QueueProvider');
    }
    return context;
  };

  return { QueueProvider, useQueue };
}
