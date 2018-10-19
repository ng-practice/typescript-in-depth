import { TaskPriority } from './task-priority';

export interface Task {
  guid: string;
  title: string;
  text: string;
  priority: TaskPriority;
  isDone: boolean;
}
