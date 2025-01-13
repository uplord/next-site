'use client';

import { CreateQueueContext } from '@/context/createQueueContext';

export const { QueueProvider, useQueue } = CreateQueueContext();
export const {
  QueueProvider: TimelineQueueProvider,
  useQueue: useTimelineQueue,
} = CreateQueueContext();
