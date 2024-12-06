'use client';

import { createContext, useContext, useState } from 'react';

const QueueContext = createContext();

export function QueueProvider({ children }) {
  const [queue, setQueue] = useState([]);

  const addToQueue = (id) => {
    setQueue((prevQueue) => prevQueue.includes(id) ? prevQueue : [...prevQueue, id]);
  };

  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((item) => item !== id));
  };

  return (
    <QueueContext.Provider value={{ queue, addToQueue, removeFromQueue }}>
      {children}
    </QueueContext.Provider>
  );
}

export function useQueue() {
  return useContext(QueueContext);
}