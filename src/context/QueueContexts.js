"use client";

import { CreateQueueContext } from "@/context/CreateQueueContext";

export const { QueueProvider, useQueue } = CreateQueueContext();
export const {
  QueueProvider: TimelineQueueProvider,
  useQueue: useTimelineQueue,
} = CreateQueueContext();
