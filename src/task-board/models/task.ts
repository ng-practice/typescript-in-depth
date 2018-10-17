import { TaskPriority } from './task-priority';

export interface Task {
  id: string;
  title: string;
  text: string;
  priority: TaskPriority;
  isDone: boolean;
}
