"use client";

import { createContext, useContext, useState } from "react";

export function CreateQueueContext() {
  const QueueContext = createContext();

  const QueueProvider = ({ children }) => {
    const [queue, setQueue] = useState([]);

    const addToQueue = (id) => {
      setQueue((prevQueue) =>
        prevQueue.includes(id) ? prevQueue : [...prevQueue, id]
      );
    };

    const removeFromQueue = (id) => {
      setQueue((prevQueue) => prevQueue.filter((item) => item !== id));
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
      console.error("useQueue must be used within a QueueProvider");
      return;
    }
    return context;
  };

  return { QueueProvider, useQueue };
}
